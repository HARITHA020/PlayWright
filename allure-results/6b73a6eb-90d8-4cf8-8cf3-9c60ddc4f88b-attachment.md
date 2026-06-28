# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: alerts.test.ts >> playground alert two
- Location: tests\alerts.test.ts:15:1

# Error details

```
Error: locator.click: Test ended.
Call log:
  - waiting for getByRole('button', { name: 'Click Me' }).nth(1)

```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test';
  2  | 
  3  | test('playground alert test', async ({ page }) => {
  4  |     await page.goto('https://www.testmuai.com/selenium-playground/javascript-alert-box-demo/');
  5  | 
  6  |     page.on('dialog',async(alert)=>{
  7  |         const text=alert.message();
  8  |         console.log(text);
  9  |         await alert.accept();
  10 |     });
  11 | 
  12 |     page.getByRole('button',{name:'Click Me'}).nth(0).click();
  13 | });
  14 | 
  15 | test('playground alert two',async({page})=>{
  16 |     page.on('dialog',async(alert)=>{
  17 |         const text=alert.message();
  18 |         console.log(text);
  19 |         await alert.accept();
  20 |     });
  21 | 
> 22 |     page.getByRole('button',{name:'Click Me'}).nth(1).click();
     |                                                       ^ Error: locator.click: Test ended.
  23 | });
  24 | 
```