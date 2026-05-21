# INDEES Web

Industrial supply website built with React, TypeScript, Vite and Tailwind v4.

## Scripts

- `npm run dev`: Start local development server.
- `npm run backend:dev`: Start quote backend in watch mode.
- `npm run backend:start`: Start quote backend.
- `npm run build`: Compile and produce production build.
- `npm run typecheck`: Run TypeScript project checks.
- `npm run lint`: Run ESLint checks.
- `npm run check`: Run lint and typecheck together.
- `npm run preview`: Preview production build.

## Quote Backend

Node-based backend lives under `backend/` and sends quote emails via SMTP.

### Setup

1. Install backend dependencies:
	- `npm --prefix backend install`
2. Copy env template and configure SMTP + recipient:
	- `copy backend/.env.example backend/.env` (Windows)
3. Start backend:
	- `npm run backend:dev`
4. Start frontend:
	- `npm run dev`

### Frontend API URL

Set this in `.env` at project root if backend is not on localhost:8787:

- `VITE_QUOTE_API_URL=http://localhost:8787`

### Backend Environment Variables

- `PORT`: Backend port (default `8787`)
- `FRONTEND_ORIGIN`: Allowed CORS origin for frontend
- `SMTP_HOST`: SMTP server host
- `SMTP_PORT`: SMTP port
- `SMTP_SECURE`: `true`/`false`
- `SMTP_USER`: SMTP username
- `SMTP_PASS`: SMTP password
- `QUOTE_FROM_EMAIL`: Sender email address
- `QUOTE_TO_EMAIL`: Default destination email for quote requests
- `QUOTE_ALLOWED_RECIPIENTS`: Optional comma-separated allowlist for `recipientEmail` override

## Architecture

- `src/components`: Shared UI components and app-level building blocks.
- `src/components/layout`: Layout primitives such as page scaffolds.
- `src/pages`: Route-level feature modules.
- `src/pages/<feature>/data.ts`: Content/data source for a feature.
- `src/pages/<feature>/types.ts`: Feature-local model types.
- `src/pages/<feature>/sections`: Section-level composable UI pieces.

## Import Conventions

- Use path alias imports for app code: `@/...`
- Keep route files lightweight and compose from section components.
- Keep content in `data.ts`, UI in `index.tsx`/`sections/*.tsx`, and types in `types.ts`.

## Quality Guardrails

- Prefer typed feature models instead of inline object literals in page files.
- Keep sections independent and focused on one display concern.
- Avoid dead files and stale components.
- Use semantic links for route navigation, reserve buttons for actions.
