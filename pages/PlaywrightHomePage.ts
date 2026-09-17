import { Page, Locator } from '@playwright/test';

export class PlaywrightHomePage {
  readonly page: Page;
  readonly getStartedLink: Locator;
  readonly docsLink: Locator;
  readonly searchButton: Locator;
  readonly searchInput: Locator;
  readonly searchResults: Locator;

  constructor(page: Page) {
    this.page = page;
    this.getStartedLink = page.getByRole('link', { name: 'Get started' });
    this.docsLink = page.getByRole('link', { name: 'Docs' });
    this.searchButton = page.getByRole('button', { name: 'Search (Control+k)' });
    this.searchInput = page.getByRole('searchbox');
    this.searchResults = page.getByRole('option');
  }

  async goto() {
    await this.page.goto('https://playwright.dev/');
  }

  async clickGetStarted() {
    await this.getStartedLink.click();
  }

  async clickDocs() {
    await this.docsLink.click();
  }

  async search(query: string) {
    await this.searchButton.click();
    await this.searchInput.fill(query);
  }

  async clickFirstSearchResult() {
    await this.searchResults.first().click();
  }
}
