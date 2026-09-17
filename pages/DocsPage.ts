import { Page, Locator } from '@playwright/test';

export class DocsPage {
  readonly page: Page;
  readonly sidebarNav: Locator;
  readonly heading: Locator;

  constructor(page: Page) {
    this.page = page;
    this.sidebarNav = page.getByRole('navigation', { name: 'Docs sidebar' });
    this.heading = page.getByRole('heading', { level: 1 });
  }

  async goto() {
    await this.page.goto('https://playwright.dev/docs/intro');
  }

  sidebarLink(name: string): Locator {
    return this.sidebarNav.getByRole('link', { name });
  }

  async clickSidebarLink(name: string) {
    await this.sidebarLink(name).click();
  }
}
