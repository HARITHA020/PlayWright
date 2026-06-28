# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: alerts.test.ts >> playground alert test
- Location: tests\alerts.test.ts:3:1

# Error details

```
Error: locator.click: Test ended.
Call log:
  - waiting for getByRole('button', { name: 'Click Me' }).first()
    - locator resolved to <button type="button" class="btn btn-dark my-30 mx-10 hover:bg-lambda-900 hover:border-lambda-900">Click Me</button>
  - attempting click action
    - waiting for element to be visible, enabled and stable
  - element was detached from the DOM, retrying
    - locator resolved to <button type="button" class="btn btn-dark my-30 mx-10 hover:bg-lambda-900 hover:border-lambda-900">Click Me</button>
  - attempting click action
    - waiting for element to be visible, enabled and stable
    - element is visible, enabled and stable
    - scrolling into view if needed
    - done scrolling

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
> 12 |     page.getByRole('button',{name:'Click Me'}).nth(0).click();
     |                                                       ^ Error: locator.click: Test ended.
  13 | });
  14 | 
  15 | 
```