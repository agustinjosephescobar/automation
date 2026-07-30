# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```
npm install     # install dependencies
npm run build   # compile TypeScript (src/) to JavaScript (dist/), via tsc
npm start       # run the compiled output (node dist/index.js)
```

There is no lint or test setup yet.

## Architecture

This is a minimal Node.js + TypeScript starter. All source lives under `src/`, compiles via `tsc` (see `tsconfig.json`) into `dist/`, and `dist/index.js` is the runtime entry point (`package.json` `main`). Currently `src/index.ts` is the only source file.
