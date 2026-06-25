import { test } from '@playwright/test';

test('Basic Commands', async ({ page }) => {
    await page.goto('https://www.demoblaze.com');
    console.log("Title:", await page.title());
    console.log("URL:", page.url());
    await page.goto('https://www.demoblaze.com/cart.html');
    await page.goBack();
    await page.goForward();
    await page.reload();
    await page.waitForTimeout(3000);
});
