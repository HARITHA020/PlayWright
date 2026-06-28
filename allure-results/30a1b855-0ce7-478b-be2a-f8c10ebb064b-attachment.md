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
    12 × locator resolved to <p class="mt-20" id="addmessage">Entered value is not a number</p>
       - unexpected value "Entered value is not a number"

```

```yaml
- paragraph: Entered value is not a number
```

# Test source

```ts
  1  | import{test,expect} from '@playwright/test'
  2  | 
  3  | test('playground sum test',async({page})=>{
  4  |     await page.goto('https://www.testmuai.com/selenium-playground/simple-form-demo/')
  5  |     console.log("the url:",page.url());
  6  |     const title=await page.title()
  7  |     console.log("the title:",title);
  8  |     const expectvalue="40";
  9  |     await page.locator("#sum1").fill("20");
  10 |     const num1=await page.locator('#sum1').inputValue();
  11 |     console.log("the num 1 value:",num1);
  12 |     await page.locator("#sum2").fill("20");
  13 |      const num2=await page.locator('#sum2').inputValue();
  14 |     console.log("the num 2 value:",num2);
  15 |     //await page.waitForTimeout(5000);
  16 |     const btn=await page.getByRole('button',{name:'Get Sum'}).click();
  17 |     const result=await page.locator('#addmessage').textContent();
  18 |     console.log("the reuslt is:",result);
> 19 |     await expect(page.locator("#addmessage")).toHaveText(expectvalue);
     |                                               ^ Error: expect(locator).toHaveText(expected) failed
  20 | });
```