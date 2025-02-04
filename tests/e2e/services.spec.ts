import { test, expect } from './setup';

test.describe('Services Tests', () => {
  test('should display photography services', async ({ page }) => {
    await page.goto('/en/services/photography');

    const minimumPackageCard = page.getByTestId('minimum-package-card');
    const basicPackageCard = page.getByTestId('basic-package-card');
    const extendedPackageCard = page.getByTestId('extended-package-card');

    await expect(minimumPackageCard.locator('h2')).toHaveText('Minimum');
    await expect(basicPackageCard.locator('h2')).toHaveText('Basic');
    await expect(extendedPackageCard.locator('h2')).toHaveText('Extended');

    await expect(minimumPackageCard.locator('a')).toHaveAttribute('href', '/en/contact');
    await expect(basicPackageCard.locator('a')).toHaveAttribute('href', '/en/contact');
    await expect(extendedPackageCard.locator('a')).toHaveAttribute('href', '/en/contact');
  });

  test('should display videography services', async ({ page }) => {
    await page.goto('/en/services/videography');
    
    const minimumPackageCard = page.getByTestId('minimum-package-card');
    const basicPackageCard = page.getByTestId('basic-package-card');
    const eventsPackageCard = page.getByTestId('events-package-card');

    await expect(minimumPackageCard.locator('h2')).toHaveText('Minimum');
    await expect(basicPackageCard.locator('h2')).toHaveText('Basic');
    await expect(eventsPackageCard.locator('h2')).toHaveText('Events');
    
    await expect(minimumPackageCard.locator('a')).toHaveAttribute('href', '/en/contact');
    await expect(basicPackageCard.locator('a')).toHaveAttribute('href', '/en/contact');
    await expect(eventsPackageCard.locator('a')).toHaveAttribute('href', '/en/contact');
  });

  test('should display wedding services', async ({ page }) => {
    await page.goto('/en/services/wedding');

    const photoOnlyPackageCard = page.getByTestId('photo-only-package-card');   
    const videoOnlyPackageCard = page.getByTestId('video-only-package-card');

    await expect(photoOnlyPackageCard.locator('h2')).toHaveText('Photo Only');
    await expect(videoOnlyPackageCard.locator('h2')).toHaveText('Video Only');
    
    await expect(photoOnlyPackageCard.locator('a')).toHaveAttribute('href', '/en/contact');
    await expect(videoOnlyPackageCard.locator('a')).toHaveAttribute('href', '/en/contact');
  });
}); 