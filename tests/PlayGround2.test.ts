import { test, expect } from '@playwright/test';

test('playground sum test', async ({ page }) => {
    await page.goto('https://www.testmuai.com/selenium-playground/simple-form-demo/');
    console.log("The URL:", page.url());
    const title = await page.title();
    console.log("The Title:", title);
    const expectedValue = "40";
    await page.locator("#sum1").fill("20");
    console.log("Num1:", await page.locator("#sum1").inputValue());
    await page.locator("#sum2").fill("20");
    console.log("Num2:", await page.locator("#sum2").inputValue());
    await page.waitForTimeout(5000)
    await page.getByRole('button', { name: 'Get Sum' }).click();
    const result = await page.locator("#addmessage").textContent();
    console.log("Result:", result);
    await expect(page.locator("#addmessage")).toHaveText(expectedValue);
});