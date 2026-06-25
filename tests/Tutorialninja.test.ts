import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto(process.env.BASE_URL!);
  await page.getByRole('link', { name: ' My Account' }).click();
  await page.getByRole('link', { name: 'Login' }).click();
  await page.getByRole('textbox', { name: 'E-Mail Address' }).click();
  await page.getByRole('textbox', { name: 'E-Mail Address' }).fill(process.env.USERNAMES!);
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill(process.env.PASSWORD!);
  await page.getByRole('button', { name: 'Login' }).click();
  //await page.goto('https://tutorialsninja.com/demo/index.php?route=account/account');
  //await expect(page.getByRole('button', { name: '$ Currency  ' })).toBeVisible();

  await page.getByRole('link', { name: 'Edit your account information' }).click();
  await expect(page.getByRole('group', { name: 'Your Personal Details' })).toBeVisible();
  await expect(page.getByRole('textbox', { name: '* E-Mail' })).toHaveValue('haritha11@gmail.com');
});