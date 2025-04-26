import { test, expect } from '@playwright/test';

test.describe('Authentication', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('https://opensource-demo.orangehrmlive.com');
  });

  test('Login-001: Log in Successfully', async ({ page }) => {
    await test.step('Verify login page elements', async () => {
      await expect(page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
      await expect(page).toHaveTitle('OrangeHRM');
      await expect(page.getByAltText('company-branding')).toBeVisible();
      await expect(page.locator('//div[@class="orangehrm-login-logo"]//img[@alt="orangehrm-logo"]')).toBeVisible();
      await expect(page.locator('.oxd-text.oxd-text--h5.orangehrm-login-title')).toBeVisible();
      await expect(page.locator('.oxd-sheet.oxd-sheet--rounded.oxd-sheet--gutters.oxd-sheet--gray-lighten-2.orangehrm-demo-credentials')).toBeVisible();
      await expect(page.locator('//p[normalize-space()="Username : Admin"]')).toBeVisible();
      await expect(page.locator('//p[normalize-space()="Password : admin123"]')).toBeVisible();
      await expect(page.locator('(//div[@class="oxd-form-row"])[1]')).toBeVisible();
      await expect(page.locator('(//div[@class="oxd-form-row"])[2]')).toBeVisible();
      await expect(page.locator('(//div[@class="oxd-input-group__label-wrapper"])[1]')).toBeVisible();
      await expect(page.locator('[name="username"]')).toBeVisible();
      await expect(page.locator('(//div[@class="oxd-input-group__label-wrapper"])[2]')).toBeVisible();
      await expect(page.locator('[name="password"]')).toBeVisible();
      await expect(page.locator('//div[@class="oxd-form-actions orangehrm-login-action"]')).toBeVisible();
      await expect(page.locator('//p[@class="oxd-text oxd-text--p orangehrm-login-forgot-header"]')).toBeVisible();
    });

    await test.step('Log in with valid credentials', async () => {
      await page.locator('[name="username"]').pressSequentially('Admin', { delay: 100 });
      await page.locator('[name="password"]').pressSequentially('admin123', { delay: 100 });
      await page.click('//div[@class="oxd-form-actions orangehrm-login-action"]');
    });

    await test.step('Verify that the management dashboard page is displayed', async () => {
      await expect(page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index');
      await expect(page).toHaveTitle('OrangeHRM');
      await expect(page.locator('.oxd-text.oxd-text--h6.oxd-topbar-header-breadcrumb-module')).toBeVisible();
      await expect(page.locator('(//div[@class="oxd-grid-item oxd-grid-item--gutters orangehrm-dashboard-widget"])[1]')).toBeVisible();
      await expect(page.locator('(//div[@class="oxd-grid-item oxd-grid-item--gutters orangehrm-dashboard-widget"])[2]')).toBeVisible();
      await expect(page.locator('(//div[@class="oxd-grid-item oxd-grid-item--gutters orangehrm-dashboard-widget"])[3]')).toBeVisible();
      await expect(page.locator('(//div[@class="oxd-grid-item oxd-grid-item--gutters orangehrm-dashboard-widget"])[4]')).toBeVisible();
      await expect(page.locator('(//div[@class="oxd-grid-item oxd-grid-item--gutters orangehrm-dashboard-widget"])[5]')).toBeVisible();
      await expect(page.locator('(//div[@class="oxd-grid-item oxd-grid-item--gutters orangehrm-dashboard-widget"])[6]')).toBeVisible();
      await expect(page.locator('(//div[@class="oxd-grid-item oxd-grid-item--gutters orangehrm-dashboard-widget"])[7]')).toBeVisible();
    });

    await test.step('Verify that the "Recruitment" left menu is visible', async () => {
      await expect(page.locator('//span[normalize-space()="Recruitment"]')).toBeVisible();
    });

    await test.step('Open the user profile menu and select "Logout"', async () => {
      await page.click('//p[@class="oxd-userdropdown-name"]');
      await page.locator('//a[normalize-space()="Logout"]').click();
    });
  });
});