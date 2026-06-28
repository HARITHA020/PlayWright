# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: windowsAction.test.ts >> iterate windows
- Location: tests\windowsAction.test.ts:2:1

# Error details

```
Error: page.goto: net::ERR_INTERNET_DISCONNECTED at https://demoqa.com/browser-windows
Call log:
  - navigating to "https://demoqa.com/browser-windows", waiting until "load"

```

# Page snapshot

```yaml
- generic [ref=e3]:
  - generic [ref=e5]:
    - heading "Press space to play" [level=1] [ref=e6]
    - generic [ref=e7]:
      - paragraph [ref=e8]: "Try:"
      - list [ref=e9]:
        - listitem [ref=e10]: Checking the network cables, modem, and router
        - listitem [ref=e11]: Reconnecting to Wi-Fi
        - listitem [ref=e12]:
          - link "Running Windows Network Diagnostics" [ref=e13] [cursor=pointer]:
            - /url: javascript:diagnoseErrors()
    - generic [ref=e14]: ERR_INTERNET_DISCONNECTED
  - application "Dino game, press space to play" [ref=e16]
```

# Test source

```ts
  1  | import {test} from "@playwright/test"
  2  | test('iterate windows',async({page,context})=>{
> 3  |     await page.goto("https://demoqa.com/browser-windows");
     |                ^ Error: page.goto: net::ERR_INTERNET_DISCONNECTED at https://demoqa.com/browser-windows
  4  |     const [tab] =await Promise.all([
  5  |         context.waitForEvent("page"),
  6  |         page.locator("#tabButton").click()
  7  |     ]);
  8  |     await tab.waitForLoadState();
  9  |     const [window] =await Promise.all([
  10 |         context.waitForEvent("page"),
  11 |         page.locator("#windowButton").click()
  12 |     ]);
  13 |     await window.waitForLoadState()
  14 |     const pages=context.pages();
  15 |     console.log("number of pages:",pages.length)
  16 |     for(const p of pages){
  17 |         console.log("----------------------")
  18 |         console.log("URL:",p.url());
  19 |         console.log("tittle:",await p.title())
  20 |     }
  21 | });
```