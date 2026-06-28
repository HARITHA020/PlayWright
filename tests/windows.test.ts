import {test,expect} from "@playwright/test"

test('windows handle',async({page,context})=>{
    await page.goto("https://demoqa.com/browser-windows")
    console.log("first  widow url:",page.url());
    const[newWindow] =await Promise.all([
        context.waitForEvent("page"),
        page.locator("#windowButton").click(),
    ]);

    await newWindow.waitForLoadState("domcontentloaded");
    console.log("the new window url:",newWindow.url());
    const heading= await newWindow.locator("#sampleHeading").textContent();
    console.log("heading:",heading);

    await expect(newWindow.locator("#sampleHeading")).toHaveText("This is a sample page");
    await newWindow.close();

})