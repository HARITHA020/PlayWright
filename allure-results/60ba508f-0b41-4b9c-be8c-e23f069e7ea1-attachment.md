# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Tutorialninja.test.ts >> test
- Location: tests\Tutorialninja.test.ts:3:5

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: getByRole('button', { name: '$ Currency  ' })
Expected: visible
Timeout: 5000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" with timeout 5000ms
  - waiting for getByRole('button', { name: '$ Currency  ' })

```

```yaml
- link "Skip to content":
  - /url: "#content"
- banner
- main:
  - article:
    - paragraph:
      - text: For more details visit
      - link "https://tutorialsninja.com/demo":
        - /url: https://tutorialsninja.com/demo
- contentinfo:
  - paragraph:
    - text: Copyright © 2026 Tutorialsninja | Powered by
    - link "Astra WordPress Theme":
      - /url: https://wpastra.com/
- text: desktop
```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test';
  2  | 
  3  | test('test', async ({ page }) => {
  4  |   await page.goto(process.env.BASE_URL!);
> 5  |   await expect(page.getByRole('button', { name: '$ Currency  ' })).toBeVisible();
     |                                                                     ^ Error: expect(locator).toBeVisible() failed
  6  |   await page.getByRole('link', { name: ' My Account' }).click();
  7  |   await page.getByRole('link', { name: 'Login' }).click();
  8  |   //await page.getByRole('textbox', { name: 'E-Mail Address' }).click();
  9  |   await page.getByRole('textbox', { name: 'E-Mail Address' }).fill(process.env.USERNAMES!);
  10 |  // await page.getByRole('textbox', { name: 'Password' }).click();
  11 |   await page.getByRole('textbox', { name: 'Password' }).fill(process.env.PASSWORD!);
  12 |   await page.getByRole('button', { name: 'Login' }).click();
  13 |   //await page.goto('https://tutorialsninja.com/demo/index.php?route=account/account');
  14 |   //await expect(page.getByRole('button', { name: '$ Currency  ' })).toBeVisible();
  15 | 
  16 |   await page.getByRole('link', { name: 'Edit your account information' }).click();
  17 |   await expect(page.getByRole('group', { name: 'Your Personal Details' })).toBeVisible();
  18 |   await expect(page.getByRole('textbox', { name: '* E-Mail' })).toHaveValue('haritha11@gmail.com');
  19 | });
```