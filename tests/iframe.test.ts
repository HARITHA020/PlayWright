import{test,expect} from"@playwright/test"

test('iframe test',async({page})=>{
    await page.goto("https://letcode.in/frame");
    const allframe= page.frames();
    console.log("the no of frames:"+allframe.length);
    const myframe=page.frame('firstFr');
    await myframe?.fill("input[name='fname']","haritha");
    await myframe?.fill("input[name='lname']","SR");

    await page.waitForTimeout(5000);
    const frame=page.frameLocator('iframe[name="firstFr"]');
    await expect(frame.locator("p.text-sm.font-semibold.text-center")).toContainText("haritha");
});
test('Frames2', async ({page}) => {
    await page.goto("https://letcode.in/frame");

    const frame1 = page.frameLocator('iframe[name="firstFr"]');

    await frame1.locator("input[name='fname']").fill("haritha");
    await frame1.locator("input[name='lname']").fill("SR");

    await expect(frame1.locator("p")).toContainText("You have entered");
    await expect(frame1.locator("p")).toContainText("haritha");
    await expect(frame1.locator("p")).toContainText("SR");

    await page.waitForTimeout(3000);
    const innerFrame = frame1.frameLocator("iframe[src='/innerframe']");
    await innerFrame.locator("input[name='email']").fill("haritha@gmail.com");

    await page.waitForTimeout(3000);
});