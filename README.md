# INDEES Web

Industrial supply website built with React, TypeScript, Vite and Tailwind v4.

## Scripts

- `npm run dev`: Start local development server.
- `npm run build`: Compile and produce production build.
- `npm run typecheck`: Run TypeScript project checks.
- `npm run lint`: Run ESLint checks.
- `npm run check`: Run lint and typecheck together.
- `npm run preview`: Preview production build.

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
