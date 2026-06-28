import { test,expect} from '@playwright/test';
import { log } from 'node:console';

test('selenium playgroung', async ({ page }) => {
   
    await page.goto('https://www.testmuai.com/selenium-playground/simple-form-demo/')
     console.log("the url:",page.url());
     console.log("the title:",page.title());
    const beforetext= await page.getByPlaceholder('Please enter your Message').getAttribute("placeholder");
    console.log("the before text:",beforetext);
    await page.getByRole('textbox',{ name:'Please enter your Message'}).fill("Haritha")
    await page.locator('#showInput').click();
    const afterText= await page.locator('#message').textContent();
    console.log("after test:",afterText);
    await expect(page.locator('#message')).toHaveText("Haritha");

});

