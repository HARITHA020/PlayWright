# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: alerts.test.ts >> playground alert three
- Location: tests\alerts.test.ts:29:1

# Error details

```
Error: expect(locator).toContainText(expected) failed

Locator: locator('#prompt-demo')
Expected substring: "Haritha"
Received string:    "You have entered 'haritha' !"
Timeout: 5000ms

Call log:
  - Expect "toContainText" with timeout 5000ms
  - waiting for locator('#prompt-demo')
    12 × locator resolved to <p id="prompt-demo" class="ml-10 mb-20 mt-20">You have entered 'haritha' !</p>
       - unexpected value "You have entered 'haritha' !"

```

```yaml
- paragraph: You have entered 'haritha' !
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
  16 |     await page.goto('https://www.testmuai.com/selenium-playground/javascript-alert-box-demo/');
  17 |     page.on('dialog',async(alert)=>{
  18 |         const text=alert.message();
  19 |         console.log(text);
  20 |         await alert.accept();
  21 |     });
  22 |     await page.getByRole('button', { name: 'Click Me' }).nth(1).click();
  23 |     await expect(page.locator('#confirm-demo')).toHaveText('You pressed OK!');
  24 |     const msg = await page.locator('#confirm-demo').textContent();
  25 |     console.log("The message is:", msg);
  26 | });
  27 | 
  28 | 
  29 | test('playground alert three',async({page})=>{
  30 |     await page.goto('https://www.testmuai.com/selenium-playground/javascript-alert-box-demo/');
  31 |     page.on('dialog',async(alert)=>{
  32 |         const text=alert.message();
  33 |         console.log(text);
  34 |         await alert.accept("haritha");
  35 |     });
  36 |     await page.getByRole('button', { name: 'Click Me' }).nth(2).click();
  37 |     const message = await page.locator("#prompt-demo").textContent();
  38 |     console.log("Result:", message);
> 39 |     await expect(page.locator("#prompt-demo")).toContainText("Haritha");
     |                                                ^ Error: expect(locator).toContainText(expected) failed
  40 | });
```