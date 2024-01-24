const { test, expect, describe } = require('@playwright/test');
import { chromium } from '@playwright/test';

describe('Launch Browser', () => {
    test('should first', async () => { 
        const browser = await chromium.launch({
            headless: false
        });

        const context = await browser.newContext();
        const page = await context.newPage();

        // Goto the page
        await page.goto("https://ecommerce-playground.lambdatest.io/");

        // Click on Login 
        await page.getByRole('button', { name: ' My account' }).hover();
        await page.click("//span[normalize-space()='Login']");

        // Final - Close the browser
        await browser.close();

        // User name
        await page.fill("","")

        // Password
        await page.waitForTimeout(5000);

        const newContext = await browser.newContext()
        // New Tab
        const page1 = await context.newPage()
        await page1.goto("link")

        await page.waitForTimeout(5000);
    });
});
