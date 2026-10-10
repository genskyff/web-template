# Web Template

A React + TypeScript starter built on Rsbuild.

## Features

- **Rsbuild**: Rspack-based build tool, minimal config on top of its defaults.
- **React**: With React Compiler enabled.
- **TypeScript**: Type checked in a separate process.
- **Tailwind CSS & daisyUI**: Utility-first styling with themed components.
- **React Router, Zustand, Lucide, Lodash**: Routing, state, icons, utilities.
- **Oxlint & Oxfmt**: Rust-based linter and formatter.

## Getting Started

Node.js and pnpm are managed by [mise](https://mise.jdx.dev/).

```shell
mise install
pnpm install
```

## Scripts

| Command        | Description                            |
| -------------- | -------------------------------------- |
| `pnpm dev`     | Start the dev server                   |
| `pnpm build`   | Build for production                   |
| `pnpm preview` | Serve the production build locally     |
| `pnpm test`    | Run tests with Rstest                  |
| `pnpm check`   | Lint, type check and verify formatting |
| `pnpm fix`     | Lint and format, writing fixes         |

The demo page lives in `src/pages` and `src/stores`. Delete it to start fresh.
