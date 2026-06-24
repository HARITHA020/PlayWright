import {test,expect} from '@playwright/test';

test('Login Test',async({page})=>{
    console.log("URL:", process.env.BASE_URL);
    await page.goto(process.env.BASE_URL!);
    console.log("USERNAME:", process.env.USERNAMES);
    await page.fill('#username',process.env.USERNAMES!);
    console.log("PASSWORD:", process.env.PASSWORD);
    await page.fill('#password',process.env.PASSWORD!);
    await page.click('button[type="submit"]');
    await expect(page.locator('.flash.success')).toBeVisible();
});
