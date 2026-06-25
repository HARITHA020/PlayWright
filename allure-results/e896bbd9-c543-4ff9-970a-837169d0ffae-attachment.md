# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: DemoblazeLogin.test.ts >> test
- Location: tests\DemoblazeLogin.test.ts:3:5

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator:  getByRole('link', { name: 'PRODUCT STORE' })
Expected: visible
Received: undefined

Call log:
  - Expect "toBeVisible" with timeout 5000ms
  - waiting for getByRole('link', { name: 'PRODUCT STORE' })

```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test';
  2  | 
  3  | test('test', async ({ page }) => {
  4  |   await page.goto('https://www.demoblaze.com/');
> 5  |   await expect(page.getByRole('link', { name: 'PRODUCT STORE' })).toBeVisible();
     |                                                                   ^ Error: expect(locator).toBeVisible() failed
  6  | 
  7  |   await page.getByRole('link', { name: 'Log in' }).click();
  8  |   await expect(page.getByRole('dialog', { name: 'Log in' })).toBeVisible();
  9  | 
  10 |   await page.locator('#loginusername').click();
  11 |   await page.locator('#loginusername').fill('admin');
  12 |   await page.locator('#loginpassword').click();
  13 |   await page.locator('#loginpassword').fill('admin');
  14 |   await expect(page.getByRole('img', { name: 'First slide' })).toBeVisible();
  15 | 
  16 |   await page.getByRole('button', { name: 'Log in' }).click();
  17 |   await page.getByRole('button', { name: 'Log in' }).click();
  18 |   await expect(page.getByRole('link', { name: 'Welcome admin' })).toBeVisible();
  19 |   await page.getByRole('link', { name: 'Log out' }).click();
  20 |   await expect(page.getByRole('link', { name: 'Log in' })).toBeVisible();
  21 | });
```