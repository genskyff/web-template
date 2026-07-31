# Web Template

A React + TypeScript starter built on Rsbuild.

## Features

- **Rsbuild**: Rspack-based build tool, minimal config on top of its defaults.
- **React**: With React Compiler enabled.
- **TypeScript**: Type checked in a separate process.
- **Tailwind CSS**: With self-hosted Noto Sans SC.
- **Oxlint & Oxfmt**: Rust-based linter and formatter.

## Getting Started

### Prerequisites

Make sure you have the following installed:

- Node.js (v24 or later)

Install the dependencies:

```shell
corepack enable
pnpm install
```

### Development

Start the dev server:

```shell
pnpm dev
```

Build the app for production:

```shell
pnpm build
```

Preview the production build locally:

```shell
pnpm preview
```

Lint and format the code:

```shell
pnpm check
pnpm fix
```
