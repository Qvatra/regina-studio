import { test, expect } from './setup';

test.describe('Navigation Tests', () => {
  test('should navigate through main pages in desktop', async ({ page, isMobile }) => {
    test.skip(isMobile, 'This test is for desktop only');
    
    await page.goto('/');

    // About page
    await page.click('*[data-testid="about-nav-item"]');
    await expect(page).toHaveURL('en/about');

    // Contact page
    await page.click('*[data-testid="contact-nav-item"]');
    await expect(page).toHaveURL('en/contact');

    // Photography portfolio page
    await page.click('*[data-testid="portfolio-nav-item"]');
    await page.click('*[data-testid="photography-portfolio-nav-item"]');
    await expect(page).toHaveURL('en/portfolio/photography');

    // Videography portfolio page
    await page.click('*[data-testid="portfolio-nav-item"]');
    await page.click('*[data-testid="videography-portfolio-nav-item"]');
    await expect(page).toHaveURL('en/portfolio/videography');

    // Photography services page
    await page.click('*[data-testid="services-nav-item"]');
    await page.click('*[data-testid="photography-services-nav-item"]');
    await expect(page).toHaveURL('en/services/photography');

    // Videography services page
    await page.click('*[data-testid="services-nav-item"]');
    await page.click('*[data-testid="videography-services-nav-item"]');
    await expect(page).toHaveURL('en/services/videography');

    // Wedding services page
    await page.click('*[data-testid="services-nav-item"]');
    await page.click('*[data-testid="wedding-services-nav-item"]');
    await expect(page).toHaveURL('en/services/wedding');

    // Home page
    await page.click('*[data-testid="home-nav-item"]');
    await expect(page).toHaveURL('/en');
  });

  test('should navigate through main pages in mobile', async ({ page, isMobile }) => {
    test.skip(!isMobile, 'This test is for mobile only');
    
    await page.goto('/');

    // About page
    await page.click('*[data-testid="burger-menu"]');
    await page.click('a[data-testid="about-nav-item-mobile"]');
    await expect(page).toHaveURL('en/about');

    // Contact page
    await page.click('*[data-testid="burger-menu"]');
    await page.click('a[data-testid="contact-nav-item-mobile"]');
    await expect(page).toHaveURL('en/contact');

    // Photography portfolio page
    await page.click('*[data-testid="burger-menu"]');
    await page.click('a[data-testid="photography-portfolio-nav-item-mobile"]');
    await expect(page).toHaveURL('en/portfolio/photography');

    // Videography portfolio page
    await page.click('*[data-testid="burger-menu"]');
    await page.click('a[data-testid="videography-portfolio-nav-item-mobile"]');
    await expect(page).toHaveURL('en/portfolio/videography');

    // Photography services page
    await page.click('*[data-testid="burger-menu"]');
    await page.click('a[data-testid="photography-services-nav-item-mobile"]');
    await expect(page).toHaveURL('en/services/photography');

    // Videography services page
    await page.click('*[data-testid="burger-menu"]');
    await page.click('a[data-testid="videography-services-nav-item-mobile"]');
    await expect(page).toHaveURL('en/services/videography');

    // Wedding services page
    await page.click('*[data-testid="burger-menu"]');
    await page.click('a[data-testid="wedding-services-nav-item-mobile"]');
    await expect(page).toHaveURL('en/services/wedding');

    // Home page
    await page.click('*[data-testid="burger-menu"]');
    await page.click('a[data-testid="home-nav-item-mobile"]');
    await expect(page).toHaveURL('/en');
  });

  test('should switch languages', async ({ page }) => {
    await page.goto('/');
    await expect(page).toHaveURL('/en');
    
    // Switch to Dutch
    await page.click('button[data-testid="language-selector-button"]');
    await page.click('button[data-testid="nl-button"]');
    await expect(page).toHaveURL('/nl');
    
    // Switch to Russian
    await page.click('button[data-testid="language-selector-button"]');
    await page.click('button[data-testid="ru-button"]');
    await expect(page).toHaveURL('/ru');

    // Switch to English
    await page.click('button[data-testid="language-selector-button"]');
    await page.click('button[data-testid="en-button"]');
    await expect(page).toHaveURL('/en');
  });
}); 