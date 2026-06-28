import { test, expect } from '@playwright/test';

test('Dropdown select', async ({ page }) => {
    await page.goto('https://www.testmuai.com/selenium-playground/select-dropdown-demo/');
    await page.selectOption("#select-demo",{
        label:"Wednesday"
        //value:"Friday"
        //index:7
    })
    await page.waitForTimeout(5000);
    await page.selectOption("#multi-select",[
        {label:"Texas"},
        {index:2},
        {value:"Washington"},
    ])
});