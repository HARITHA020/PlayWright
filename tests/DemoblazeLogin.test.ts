import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto(process.env.BASE_URL!);
  await expect(page.getByRole('link', { name: 'PRODUCT STORE' })).toBeVisible();
  await page.getByRole('link', { name: 'Log in' }).click();
  await expect(page.getByRole('dialog', { name: 'Log in' })).toBeVisible();
  await page.locator('#loginusername').fill(process.env.USERNAMES!);
  await page.locator('#loginpassword').fill(process.env.PASSWORD!);
  await page.getByRole('button', { name: 'Log in' }).click();
  await expect(page.getByRole('link', { name: 'Welcome admin' })).toBeVisible();
  await page.getByRole('link', { name: 'Log out' }).click();
  await expect(page.getByRole('link', { name: 'Log in' })).toBeVisible();
});