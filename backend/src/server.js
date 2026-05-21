import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import nodemailer from "nodemailer";
import { z } from "zod";

dotenv.config();

const app = express();
const port = Number(process.env.PORT || 8787);

const frontendOrigin = process.env.FRONTEND_ORIGIN || "http://localhost:5173";
const defaultRecipient = process.env.QUOTE_TO_EMAIL;

const allowedRecipients = new Set(
  (process.env.QUOTE_ALLOWED_RECIPIENTS || "")
    .split(",")
    .map((item) => item.trim().toLowerCase())
    .filter(Boolean)
);

if (!defaultRecipient) {
  console.warn("QUOTE_TO_EMAIL is not configured. Quote requests cannot be delivered.");
}

const formSchema = z.object({
  fullName: z.string().min(2).max(120),
  company: z.string().min(2).max(120),
  email: z.string().email().max(180),
  phone: z.string().max(60).optional().default(""),
  city: z.string().min(2).max(120),
  country: z.string().min(2).max(120),
  productCategory: z.string().min(2).max(500),
  message: z.string().min(10).max(5000),
  recipientEmail: z.string().email().optional(),
});

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT || 587),
  secure: String(process.env.SMTP_SECURE || "false") === "true",
  auth:
    process.env.SMTP_USER && process.env.SMTP_PASS
      ? {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_PASS,
        }
      : undefined,
});

app.use(
  cors({
    origin: frontendOrigin,
  })
);
app.use(express.json({ limit: "1mb" }));

app.get("/api/health", (_req, res) => {
  res.json({ ok: true, service: "quote-backend" });
});

app.post("/api/quote", async (req, res) => {
  const parsed = formSchema.safeParse(req.body);

  if (!parsed.success) {
    return res.status(400).json({
      ok: false,
      error: "Invalid payload",
      issues: parsed.error.issues,
    });
  }

  const payload = parsed.data;
  const requestedRecipient = payload.recipientEmail?.trim().toLowerCase();

  let recipient = defaultRecipient;
  if (requestedRecipient) {
    if (allowedRecipients.size > 0 && !allowedRecipients.has(requestedRecipient)) {
      return res.status(403).json({
        ok: false,
        error: "Recipient is not allowed",
      });
    }
    recipient = requestedRecipient;
  }

  if (!recipient) {
    return res.status(500).json({
      ok: false,
      error: "Recipient email is not configured",
    });
  }

  const submittedAt = new Date().toISOString();

  const html = `
    <div style="font-family:Arial,Helvetica,sans-serif;background:#f3f7fc;padding:24px;">
      <div style="max-width:760px;margin:0 auto;background:#ffffff;border:1px solid #d7dee8;">
        <div style="background:#00264d;color:#ffffff;padding:22px 24px;">
          <div style="font-size:11px;letter-spacing:0.22em;text-transform:uppercase;color:#d1b87a;">Quote Request</div>
          <h2 style="margin:10px 0 0 0;font-weight:500;font-size:26px;line-height:1.2;">New Request Submitted</h2>
        </div>

        <div style="padding:24px;">
          <table width="100%" cellpadding="0" cellspacing="0" style="border-collapse:collapse;">
            <tr>
              <td style="padding:10px 0;border-bottom:1px solid #e8edf5;"><strong>Name</strong></td>
              <td style="padding:10px 0;border-bottom:1px solid #e8edf5;">${escapeHtml(payload.fullName)}</td>
            </tr>
            <tr>
              <td style="padding:10px 0;border-bottom:1px solid #e8edf5;"><strong>Company</strong></td>
              <td style="padding:10px 0;border-bottom:1px solid #e8edf5;">${escapeHtml(payload.company)}</td>
            </tr>
            <tr>
              <td style="padding:10px 0;border-bottom:1px solid #e8edf5;"><strong>Email</strong></td>
              <td style="padding:10px 0;border-bottom:1px solid #e8edf5;">${escapeHtml(payload.email)}</td>
            </tr>
            <tr>
              <td style="padding:10px 0;border-bottom:1px solid #e8edf5;"><strong>Phone</strong></td>
              <td style="padding:10px 0;border-bottom:1px solid #e8edf5;">${escapeHtml(payload.phone || "-")}</td>
            </tr>
            <tr>
              <td style="padding:10px 0;border-bottom:1px solid #e8edf5;"><strong>City / Country</strong></td>
              <td style="padding:10px 0;border-bottom:1px solid #e8edf5;">${escapeHtml(payload.city)}, ${escapeHtml(payload.country)}</td>
            </tr>
            <tr>
              <td style="padding:10px 0;"><strong>Product Category</strong></td>
              <td style="padding:10px 0;">${escapeHtml(payload.productCategory)}</td>
            </tr>
          </table>

          <div style="margin-top:18px;padding:16px;border:1px solid #d7dee8;background:#f8fbff;">
            <div style="font-size:11px;letter-spacing:0.16em;text-transform:uppercase;color:#005da8;margin-bottom:8px;">Technical Specifications / Notes</div>
            <p style="margin:0;font-size:14px;line-height:1.7;color:#1b2736;white-space:pre-wrap;">${escapeHtml(payload.message)}</p>
          </div>
        </div>

        <div style="padding:14px 24px;background:#f3f7fc;border-top:1px solid #d7dee8;color:#5f6d80;font-size:12px;">
          Submitted at: ${escapeHtml(submittedAt)}
        </div>
      </div>
    </div>
  `;

  try {
    const info = await transporter.sendMail({
      from: process.env.QUOTE_FROM_EMAIL || process.env.SMTP_USER,
      to: recipient,
      replyTo: payload.email,
      subject: `New Quote Request - ${payload.company}`,
      html,
    });

    return res.json({
      ok: true,
      messageId: info.messageId,
    });
  } catch (error) {
    console.error("Failed to send quote email", error);
    return res.status(502).json({
      ok: false,
      error: "Failed to send quote email",
    });
  }
});

app.listen(port, () => {
  console.log(`Quote backend listening on http://localhost:${port}`);
});

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}
