import { test, expect } from './setup';

test.describe('Portfolio Tests', () => {
  test('should load photography portfolio', async ({ page }) => {
    await page.goto('/en/portfolio/photography');
    await expect(page).toHaveTitle(/Photography Portfolio/);
    const count = await page.locator('img').count();
    expect(count).toBeGreaterThan(1);
  });

  test('should load videography portfolio', async ({ page }) => {
    await page.goto('/en/portfolio/videography');
    await expect(page).toHaveTitle(/Videography Portfolio/);
    const count = await page.locator('iframe').count();
    expect(count).toBeGreaterThan(1);
  });
}); 