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

    test('Alerts Examplpe 03 - Prompt Box', async ({page}) => { 
        
        // Goto the page
        await page.goto("https://www.lambdatest.com/selenium-playground/javascript-alert-box-demo");
        
        page.on("dialog",async (alert) =>{
           const text = alert.defaultValue()
           console.log(text);
            await alert.accept("Dimuth C Bandara");
        })
        
        await page.locator("button:has-text('Click Me')").nth(2).click()
        expect(page.locator("id=confirm-demo")).toContainText("Cancel!")

    });

    test('Alerts Examplpe 04 - Modal Alert', async ({page}) => { 
        
        // Goto the page
        await page.goto("https://www.lambdatest.com/selenium-playground/javascript-alert-box-demo");
        
        page.on("dialog",async (alert) =>{
           const text = alert.defaultValue()
           console.log(text);
            await alert.accept("Dimuth C Bandara");
        })
        
        await page.locator("button:has-text('Click Me')").nth(3).click()

    });
});
