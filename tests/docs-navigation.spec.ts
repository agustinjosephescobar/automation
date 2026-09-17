import { test, expect } from '@playwright/test';
import { PlaywrightHomePage } from '../pages/PlaywrightHomePage';
import { DocsPage } from '../pages/DocsPage';

test('homepage shows the Get started and Docs links', async ({ page }) => {
  const homePage = new PlaywrightHomePage(page);

  await homePage.goto();

  await expect(homePage.getStartedLink).toBeVisible();
  await expect(homePage.docsLink).toBeVisible();
});

test('clicking Get started opens the installation guide', async ({ page }) => {
  const homePage = new PlaywrightHomePage(page);
  const docsPage = new DocsPage(page);

  await homePage.goto();
  await homePage.clickGetStarted();

  await expect(docsPage.heading).toHaveText('Installation');
});

test('searching for "locators" opens the Locators guide', async ({ page }) => {
  const homePage = new PlaywrightHomePage(page);

  await homePage.goto();
  await homePage.search('locators');

  await expect(homePage.searchResults.first()).toBeVisible();

  await homePage.clickFirstSearchResult();

  await expect(page).toHaveURL(/\/docs\/locators/);
  await expect(page.getByRole('heading', { level: 1 })).toHaveText('Locators');
});

test('docs sidebar navigation opens the Writing tests guide', async ({ page }) => {
  const docsPage = new DocsPage(page);

  await docsPage.goto();
  await docsPage.clickSidebarLink('Writing tests');

  await expect(docsPage.heading).toHaveText('Writing tests');
});
