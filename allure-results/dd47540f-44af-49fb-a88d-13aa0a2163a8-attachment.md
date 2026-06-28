# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: PlayGround2.test.ts >> playground sum test
- Location: tests\PlayGround2.test.ts:3:1

# Error details

```
Error: expect(locator).toHaveText(expected) failed

Locator:  locator('#addmessage')
Expected: "40"
Received: "Entered value is not a number"
Timeout:  5000ms

Call log:
  - Expect "toHaveText" with timeout 5000ms
  - waiting for locator('#addmessage')
    10 × locator resolved to <p class="mt-20" id="addmessage">Entered value is not a number</p>
       - unexpected value "Entered value is not a number"

```

```yaml
- paragraph: Entered value is not a number
```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test';
  2  | 
  3  | test('playground sum test', async ({ page }) => {
  4  |     page.waitForTimeout(5000);
  5  |     await page.goto('https://www.testmuai.com/selenium-playground/simple-form-demo/');
  6  |     console.log("The URL:", page.url());
  7  |     const title = await page.title();
  8  |     console.log("The Title:", title);
  9  |     const expectedValue = "40";
  10 |     await page.locator("#sum1").fill("20");
  11 |     console.log("Num1:", await page.locator("#sum1").inputValue());
  12 |     await page.locator("#sum2").fill("20");
  13 |     console.log("Num2:", await page.locator("#sum2").inputValue());
  14 |     await page.getByRole('button', { name: 'Get Sum' }).click();
  15 |     const result = await page.locator("#addmessage").textContent();
  16 |     console.log("Result:", result);
> 17 |     await expect(page.locator("#addmessage")).toHaveText(expectedValue);
     |                                               ^ Error: expect(locator).toHaveText(expected) failed
  18 | });
```