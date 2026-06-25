# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Tutorialninja.test.ts >> test
- Location: tests\Tutorialninja.test.ts:3:5

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: locator.click: Test timeout of 30000ms exceeded.
Call log:
  - waiting for getByRole('link', { name: ' My Account' })

```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - link "Skip to content" [ref=e2] [cursor=pointer]:
    - /url: "#content"
  - generic [ref=e3]:
    - banner
    - main [ref=e7]:
      - article [ref=e8]:
        - paragraph [ref=e17]:
          - text: For more details visit
          - link "https://tutorialsninja.com/demo" [ref=e18] [cursor=pointer]:
            - /url: https://tutorialsninja.com/demo
    - contentinfo [ref=e19]:
      - paragraph [ref=e26]:
        - text: Copyright © 2026 Tutorialsninja | Powered by
        - link "Astra WordPress Theme" [ref=e27] [cursor=pointer]:
          - /url: https://wpastra.com/
  - generic [ref=e28]: desktop
```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test';
  2  | 
  3  | test('test', async ({ page }) => {
  4  |   await page.goto(process.env.BASE_URL!);
> 5  |   await page.getByRole('link', { name: ' My Account' }).click();
     |                                                          ^ Error: locator.click: Test timeout of 30000ms exceeded.
  6  |   await page.getByRole('link', { name: 'Login' }).click();
  7  |   await page.getByRole('textbox', { name: 'E-Mail Address' }).click();
  8  |   await page.getByRole('textbox', { name: 'E-Mail Address' }).fill(process.env.USERNAMES!);
  9  |   await page.getByRole('textbox', { name: 'Password' }).click();
  10 |   await page.getByRole('textbox', { name: 'Password' }).fill(process.env.PASSWORD!);
  11 |   await page.getByRole('button', { name: 'Login' }).click();
  12 |   //await page.goto('https://tutorialsninja.com/demo/index.php?route=account/account');
  13 |   //await expect(page.getByRole('button', { name: '$ Currency  ' })).toBeVisible();
  14 | 
  15 |   await page.getByRole('link', { name: 'Edit your account information' }).click();
  16 |   await expect(page.getByRole('group', { name: 'Your Personal Details' })).toBeVisible();
  17 |   await expect(page.getByRole('textbox', { name: '* E-Mail' })).toHaveValue('haritha11@gmail.com');
  18 | });
```