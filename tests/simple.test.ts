import { test, expect } from '@playwright/test';

test('selenium playground', async ({ page }) => {

    await page.goto('https://www.testmuai.com/selenium-playground/simple-form-demo/');

    const beforeText = await page.locator('#user-message').textContent();
    console.log("Before Text:", beforeText);

    await page.locator('#user-message').fill('Haritha');

    await page.locator('#showInput').click();

    const afterText = page.locator('#message');

    await expect(afterText).toHaveText('Haritha');

});