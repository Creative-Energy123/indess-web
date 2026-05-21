import { useEffect, useMemo, useState } from "react";
import type { FormEvent, ReactNode } from "react";

import { INITIAL_QUOTE_FORM, PRODUCT_CATEGORY_OPTIONS } from "./quote-request/data";
import type { CitySuggestion, QuoteRequestForm, QuoteRequestPanelProps } from "./quote-request/types";

const cn = (...classes: Array<string | false | null | undefined>) => classes.filter(Boolean).join(" ");

const inputClass =
  "w-full bg-transparent border-b border-white/25 py-3 text-white font-light focus:outline-none focus:border-gold transition-colors";

const Field = ({ label, children }: { label: string; children: ReactNode }) => (
  <label className="block">
    <span className="mb-3 block text-[10px] uppercase tracking-editorial text-white/55">{label}</span>
    {children}
  </label>
);

export default function QuoteRequestPanel({ open, onOpenChange }: QuoteRequestPanelProps) {
  const [form, setForm] = useState<QuoteRequestForm>(INITIAL_QUOTE_FORM);
  const [citySuggestions, setCitySuggestions] = useState<CitySuggestion[]>([]);
  const [cityLoading, setCityLoading] = useState(false);
  const [activeCategorySuggestions, setActiveCategorySuggestions] = useState<string[]>([]);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [submitSuccess, setSubmitSuccess] = useState<string | null>(null);

  const quoteApiUrl = import.meta.env.VITE_QUOTE_API_URL ?? "http://localhost:8787";

  const updateField = (key: keyof QuoteRequestForm, value: string) => {
    setForm((prev) => ({ ...prev, [key]: value }));
  };

  const categoryDraft = useMemo(() => {
    const parts = form.productCategory.split(",");
    return parts[parts.length - 1]?.trim() ?? "";
  }, [form.productCategory]);

  useEffect(() => {
    if (!open) {
      return;
    }

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onOpenChange(false);
      }
    };

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open, onOpenChange]);

  useEffect(() => {
    if (!categoryDraft) {
      setActiveCategorySuggestions([]);
      return;
    }

    const selected = new Set(
      form.productCategory
        .split(",")
        .map((item) => item.trim().toLowerCase())
        .filter(Boolean)
    );

    setActiveCategorySuggestions(
      PRODUCT_CATEGORY_OPTIONS.filter((option) => option.toLowerCase().includes(categoryDraft.toLowerCase()))
        .filter((option) => !selected.has(option.toLowerCase()))
        .slice(0, 6)
    );
  }, [categoryDraft, form.productCategory]);

  useEffect(() => {
    const cityQuery = form.city.trim();
    if (cityQuery.length < 2 || !open) {
      setCitySuggestions([]);
      return;
    }

    const controller = new AbortController();
    const timeoutId = window.setTimeout(async () => {
      try {
        setCityLoading(true);
        const url = `https://nominatim.openstreetmap.org/search?format=jsonv2&addressdetails=1&limit=7&q=${encodeURIComponent(cityQuery)}`;
        const response = await fetch(url, {
          signal: controller.signal,
          headers: { Accept: "application/json" },
        });

        if (!response.ok) {
          return;
        }

        const data = (await response.json()) as Array<{
          address?: { city?: string; town?: string; village?: string; state?: string; country?: string };
        }>;

        const mapped = data
          .map((item) => {
            const city = item.address?.city || item.address?.town || item.address?.village || item.address?.state;
            const country = item.address?.country;
            if (!city || !country) {
              return null;
            }
            return { city, country, label: `${city}, ${country}` };
          })
          .filter((item): item is CitySuggestion => Boolean(item));

        setCitySuggestions(mapped);
      } catch {
        setCitySuggestions([]);
      } finally {
        setCityLoading(false);
      }
    }, 300);

    return () => {
      window.clearTimeout(timeoutId);
      controller.abort();
    };
  }, [form.city, open]);

  const applyCategorySuggestion = (selectedOption: string) => {
    const parts = form.productCategory.split(",");
    parts[parts.length - 1] = ` ${selectedOption}`;
    const nextValue = `${parts
      .map((part, index) => (index === 0 ? part.trim() : part))
      .join(",")
      .trim()
      .replace(/^,/, "")}, `;

    updateField("productCategory", nextValue);
    setActiveCategorySuggestions([]);
  };

  const applyCitySuggestion = (selected: CitySuggestion) => {
    updateField("city", selected.city);
    updateField("country", selected.country);
    setCitySuggestions([]);
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      setSubmitting(true);
      setSubmitError(null);
      setSubmitSuccess(null);

      const response = await fetch(`${quoteApiUrl}/api/quote`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      if (!response.ok) {
        const errorPayload = (await response.json().catch(() => null)) as { error?: string } | null;
        throw new Error(errorPayload?.error || "Failed to submit quote request");
      }

      setSubmitSuccess("Quote request submitted successfully.");
      setForm(INITIAL_QUOTE_FORM);
      window.setTimeout(() => {
        onOpenChange(false);
        setSubmitSuccess(null);
      }, 1200);
    } catch (error) {
      setSubmitError(error instanceof Error ? error.message : "Failed to submit quote request");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div
      className={cn(
        "fixed inset-0 z-[70] transition-opacity duration-300",
        open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
      )}
      aria-hidden={!open}
    >
      <button
        type="button"
        onClick={() => onOpenChange(false)}
        className="absolute inset-0 bg-black/55"
        aria-label="Close quote request panel"
      />

      <aside
        className={cn(
          "absolute right-0 top-0 h-full w-full overflow-y-auto bg-[hsl(210_100%_8%)] text-white transition-transform duration-500 md:w-1/2",
          open ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="border-b border-white/15 px-6 py-8 md:px-10 md:py-10">
          <p className="text-gold text-[11px] uppercase tracking-editorial">Query Form</p>
          <h2 className="font-display-light mt-4 text-3xl text-white md:text-4xl">Request a Quote</h2>
          <p className="mt-4 max-w-xl text-[14px] leading-[1.8] text-white/70">
            Share your technical and commercial requirements. We use these details to prepare a complete,
            accurate quotation tailored to your scope.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6 px-6 py-8 md:px-10 md:py-10">
          <div className="grid gap-6 md:grid-cols-2">
            <Field label="Full Name *">
              <input required value={form.fullName} onChange={(event) => updateField("fullName", event.target.value)} className={inputClass} />
            </Field>
            <Field label="Company *">
              <input required value={form.company} onChange={(event) => updateField("company", event.target.value)} className={inputClass} />
            </Field>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <Field label="Email Address *">
              <input required type="email" value={form.email} onChange={(event) => updateField("email", event.target.value)} className={inputClass} />
            </Field>
            <Field label="Phone Number">
              <input value={form.phone} onChange={(event) => updateField("phone", event.target.value)} className={inputClass} />
            </Field>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <Field label="City *">
              <div className="relative">
                <input
                  required
                  value={form.city}
                  onChange={(event) => updateField("city", event.target.value)}
                  className={inputClass}
                  placeholder="Start typing city name..."
                  autoComplete="off"
                />
                {citySuggestions.length > 0 && (
                  <div className="absolute left-0 right-0 top-full z-20 mt-2 border border-white/20 bg-[hsl(210_100%_10%)]">
                    {citySuggestions.map((suggestion) => (
                      <button
                        key={suggestion.label}
                        type="button"
                        onClick={() => applyCitySuggestion(suggestion)}
                        className="block w-full px-4 py-2 text-left text-sm text-white/80 hover:bg-white/10"
                      >
                        {suggestion.label}
                      </button>
                    ))}
                  </div>
                )}
                {cityLoading && <p className="mt-2 text-[11px] text-white/45">Searching cities...</p>}
              </div>
            </Field>
            <Field label="Country / Region *">
              <input required value={form.country} onChange={(event) => updateField("country", event.target.value)} className={inputClass} />
            </Field>
          </div>

          <Field label="Product Category *">
            <div className="relative">
              <input
                required
                value={form.productCategory}
                onChange={(event) => updateField("productCategory", event.target.value)}
                className={inputClass}
                placeholder="Type category, choose suggestion, then add comma"
                autoComplete="off"
              />
              {activeCategorySuggestions.length > 0 && (
                <div className="absolute left-0 right-0 top-full z-20 mt-2 border border-white/20 bg-[hsl(210_100%_10%)]">
                  {activeCategorySuggestions.map((option) => (
                    <button
                      key={option}
                      type="button"
                      onClick={() => applyCategorySuggestion(option)}
                      className="block w-full px-4 py-2 text-left text-sm text-white/80 hover:bg-white/10"
                    >
                      {option}
                    </button>
                  ))}
                </div>
              )}
            </div>
            <p className="mt-2 text-[11px] text-white/45">Multiple categories supported. Separate with commas.</p>
          </Field>

          <Field label="Technical Specifications / Notes *">
            <textarea
              required
              rows={5}
              value={form.message}
              onChange={(event) => updateField("message", event.target.value)}
              className={`${inputClass} resize-y`}
            />
          </Field>

          <div className="flex items-center justify-between gap-4 border-t border-white/15 pt-6">
            <div>
              <p className="text-[12px] text-white/55">Our team usually replies within one business day.</p>
              {submitError && <p className="mt-2 text-[12px] text-red-300">{submitError}</p>}
              {submitSuccess && <p className="mt-2 text-[12px] text-emerald-300">{submitSuccess}</p>}
            </div>
            <button
              type="submit"
              disabled={submitting}
              className="inline-flex items-center gap-3 bg-secondary px-8 py-3 text-[11px] font-medium uppercase tracking-editorial text-foreground transition-colors hover:bg-white disabled:cursor-not-allowed disabled:opacity-70"
            >
              {submitting ? "Submitting..." : "Submit Query"}
            </button>
          </div>
        </form>
      </aside>
    </div>
  );
}
