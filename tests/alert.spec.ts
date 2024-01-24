const { test, expect, describe } = require('@playwright/test');
import { chromium } from '@playwright/test';

describe('Handling JS Alerts and Dropdowns', () => {
    test('Alerts Examplpe 01', async ({page}) => { 
        
        // Goto the page
        await page.goto("https://www.lambdatest.com/selenium-playground/javascript-alert-box-demo");
        
        page.on("dialog",async (alert) =>{
           const text = alert.message()
           console.log(text);
            await alert.accept();
        })
        
        await page.locator("button:has-text('Click Me')").nth(0).click()

        
    });

    test('Alerts Examplpe 02', async ({page}) => { 
        
        // Goto the page
        await page.goto("https://www.lambdatest.com/selenium-playground/javascript-alert-box-demo");
        
        page.on("dialog",async (alert) =>{
           const text = alert.message()
           console.log(text);
            await alert.dismiss();
        })
        
        await page.locator("button:has-text('Click Me')").nth(1).click()
        expect(page.locator("id=confirm-demo")).toContainText("Cancel!")
        
    });
});
