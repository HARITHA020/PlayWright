import { test, expect } from "@playwright/test";

test('Login test case', async ({ page }) => {

    await page.goto("https://automationexercise.com/login");

    await page.getByPlaceholder('Email Address').fill("haritha1@gmail.com");

    await page.locator('[data-qa="login-password"]').fill("haritha");

    await page.locator('[data-qa="login-button"]').click();
    await expect(page.getByText('Logged in as')).toBeVisible();
});