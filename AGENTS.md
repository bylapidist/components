# Agent Guidelines for `components`

This repository contains the source for the `@lapidist/components` React component library. It is built with TypeScript and Vite and uses Storybook for documentation.

## Repository Layout

- **src/** – main source code
  - **components/** – each component is in its own folder containing:
    - `index.tsx` – component implementation
    - `*.module.scss` – scoped styles
    - `*.spec.tsx` – unit tests using Vitest
    - `*.stories.tsx` – Storybook stories
  - `global.module.scss` and shared `types.ts` are also located here.
- **.github/** – contains workflows and pull request template.
- Configuration files for ESLint, Stylelint and Prettier extend from `@lapidist/linting`.

## Getting Started

1. Use **Node.js 22** (see `.nvmrc`).
2. Install dependencies with `npm ci`.
3. Run `npm run storybook` to start Storybook during development.
4. Execute `npm run build` to create the library bundle.
5. Unit tests and type checking are run via `npm test` (or individually with `npm run test:typecheck` and `npm run test:unit`).
6. Lint all files with `npm run lint` and auto-fix with `npm run fix`.
7. `npm run build:storybook` generates the static Storybook site.

## Commit Messages

All commits must follow the **Angular commit message guidelines** enforced by Commitlint. Example format:

```
<type>(<scope>): <subject>
```

Common types include `feat`, `fix`, `chore`, `docs`, `style`, `refactor`, `test`. Scopes typically correspond to a component or area of the code. Use `npm run commit` to be guided through creating a correctly formatted message.

## Testing Before Commit

Always run the following commands before opening a pull request:

```bash
npm run lint
npm test
npm run build
```

Pre-commit hooks will also execute `npm run fix`, `npm run test:typecheck`, and `npm run test:unit` automatically.
Run `npm run update:snapshots` when you need to regenerate snapshot tests.

## Further Reading

Refer to `README.md` for basic usage of the library and to `.github/PULL_REQUEST_TEMPLATE.md` when raising pull requests.
