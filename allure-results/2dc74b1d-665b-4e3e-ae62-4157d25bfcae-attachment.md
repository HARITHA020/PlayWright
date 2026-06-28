# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: iframe.test.ts >> iframe test
- Location: tests\iframe.test.ts:3:1

# Error details

```
Error: expect(locator).toContainText(expected) failed

Locator: locator('iframe[name="firstFr"]').contentFrame().locator('p.text-sm.font-semibold.text-center')
Expected substring: "haritha"
Timeout: 5000ms
Error: element(s) not found

Call log:
  - Expect "toContainText" with timeout 5000ms
  - waiting for locator('iframe[name="firstFr"]').contentFrame().locator('p.text-sm.font-semibold.text-center')

```

```yaml
- heading "Enter Details" [level=1]
- text: First Name
- textbox "Enter name": SR
- text: Last Name
- textbox "Enter email"
- iframe
- insertion:
  - heading "These are topics related to the article that might interest you" [level=2]: Discover more
  - link "Educational Course Development"
  - link "Software"
  - link "Test Automation Training"
```

# Test source

```ts
  1  | import{test,expect} from"@playwright/test"
  2  | 
  3  | test('iframe test',async({page})=>{
  4  |     await page.goto("https://letcode.in/frame");
  5  |     const allframe= page.frames();
  6  |     console.log("the no of frames:"+allframe.length);
  7  |     const myframe=page.frame('firstFr');
  8  |     await myframe?.fill("input[name='fname']","haritha");
  9  |     await myframe?.fill("input[name='lname']","SR");
  10 | 
  11 |     await page.waitForTimeout(5000);
  12 |     const frame=page.frameLocator('iframe[name="firstFr"]');
> 13 |     await expect(frame.locator("p.text-sm.font-semibold.text-center")).toContainText("haritha");
     |                                                                        ^ Error: expect(locator).toContainText(expected) failed
  14 | 
  15 | 
  16 | 
  17 | 
  18 | })
```