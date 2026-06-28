import { test, expect } from '@playwright/test';

test('playground alert test', async ({ page }) => {
    await page.goto('https://www.testmuai.com/selenium-playground/javascript-alert-box-demo/');

    page.on('dialog',async(alert)=>{
        const text=alert.message();
        console.log(text);
        await alert.accept();
    });

    page.getByRole('button',{name:'Click Me'}).nth(0).click();
});

test('playground alert two',async({page})=>{
    await page.goto('https://www.testmuai.com/selenium-playground/javascript-alert-box-demo/');
    page.on('dialog',async(alert)=>{
        const text=alert.message();
        console.log(text);
        await alert.accept();
    });
    await page.getByRole('button', { name: 'Click Me' }).nth(1).click();
    await expect(page.locator('#confirm-demo')).toHaveText('You pressed OK!');
    const msg = await page.locator('#confirm-demo').textContent();
    console.log("The message is:", msg);
});


test('playground alert three',async({page})=>{
    await page.goto('https://www.testmuai.com/selenium-playground/javascript-alert-box-demo/');
    page.on('dialog',async(alert)=>{
        const text=alert.message();
        console.log(text);
        await alert.accept("haritha");
    });
    await page.getByRole('button', { name: 'Click Me' }).nth(2).click();
    const message = await page.locator("#prompt-demo").textContent();
    console.log("Result:", message);
    await expect(page.locator("#prompt-demo")).toContainText("You have entered 'haritha' !");
});