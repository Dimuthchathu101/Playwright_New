const { test, expect, describe } = require('@playwright/test');
import { chromium } from '@playwright/test';

describe('Button Interactions ', () => {
    test('should first', async () => { 
        const browser = await chromium.launch({
            headless: false
        });

        const context = await browser.newContext();
        const page = await context.newPage();

        // Goto the page
        await page.goto("https://www.lambdatest.com/selenium-playground/simple-form-demo");

        const messageInput = page.locator("input#user-message")
        await console.log(messageInput.getAttribute("placeholder"));
        expect(messageInput).toHaveAttribute("placeholder","Please Enter your Message")

        // Final - Close the browser
        await browser.close();

    });
});
