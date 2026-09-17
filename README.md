# Playwright E2E Automation Suite

End-to-end test automation suite built with **Playwright** and **TypeScript**, following the **Page Object Model (POM)** pattern. The suite exercises key navigation flows on [playwright.dev](https://playwright.dev), used here as the target application.

## What it covers

- Homepage navigation: visibility of the "Get started" and "Docs" links
- "Get started" flow → installation guide
- Docs search flow → searching "locators" and opening the matching guide
- Docs sidebar navigation → jumping to a specific guide (e.g. "Writing tests")

## Stack

- [Playwright Test](https://playwright.dev/) — test runner and assertions
- TypeScript
- Node.js
- Page Object Model architecture (`/pages`)

## Project structure

```
├── pages/                   # Page Objects (one class per page)
│   ├── PlaywrightHomePage.ts
│   └── DocsPage.ts
├── tests/                   # Test specs
│   └── docs-navigation.spec.ts
├── playwright.config.ts
└── package.json
```

Locators are resolved by role (`getByRole`) rather than brittle CSS selectors, and each test is independent (no shared state between tests).

## Running the tests

Requirements: [Node.js](https://nodejs.org)

```bash
npm install
npx playwright install   # first run only — installs the browsers
npx playwright test
```

View the HTML report after a run:

```bash
npx playwright show-report
```
