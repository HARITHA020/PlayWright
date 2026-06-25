import { test, expect } from "@playwright/test";

test("Valid Login test case", async ({ page }) => {
    await page.goto("https://automationexercise.com");
    await expect(page).toHaveURL("https://automationexercise.com/");
    await page.locator('a[href="/login"]').click();
    await expect(page.getByText("Login to your account")).toBeVisible();
    await page.locator('[data-qa="login-email"]').fill("haritha1@gmail.com");
    await page.locator('[data-qa="login-password"]').fill("haritha");
    await page.locator('[data-qa="login-button"]').click();
    const loggedUser = await page.locator('b').textContent();
    console.log("the logged user is:", loggedUser);
    await expect(page.getByText(/Logged in as/i)).toBeVisible();
    await page.locator('a[href="/logout"]').click();
    await expect(page.getByText("Login to your account")).toBeVisible();
});