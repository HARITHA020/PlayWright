import { test, expect } from "@playwright/test";

test('Invalid login test case', async ({ page }) => {
    await page.goto("https://automationexercise.com/login");
    await page.locator('[data-qa="login-email"]').fill("haritha11@gmail.com");
    await page.locator('[data-qa="login-password"]').fill("haritha");
    await page.locator('[data-qa="login-button"]').click();
    await expect(page.getByText("Your email or password is incorrect!")).toBeVisible();
});