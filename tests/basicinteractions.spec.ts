const { test, expect, describe } = require('@playwright/test');
import { chromium } from '@playwright/test';

describe('Interactions ', () => {
    test('Interaction with inputs', async () => { 
        const browser = await chromium.launch({
            headless: false
        });

        const context = await browser.newContext();
        const page = await context.newPage();

        // Goto the page
        await page.goto("https://www.lambdatest.com/selenium-playground/simple-form-demo");
        
        const messageInput = page.locator("input#user-message")
        await messageInput.scrollIntoViewIfNeeded()
        await console.log(messageInput.getAttribute("placeholder"));
        expect(messageInput).toHaveAttribute("placeholder","Please Enter your Message")

        console.log(await "Before Entering Data: "+messageInput.inputValue())
        await messageInput.type("Hello Dimuth")
        console.log(await "After Entering Data: "+messageInput.inputValue())
        // Final - Close the browser
        await browser.close();


    });

    test('SUM', async ({page}) => { 
        await page.goto("https://www.lambdatest.com/selenium-playground/simple-form-demo");
        const sum1input = page.locator('#sum1')
        const sum2input = page.locator('#sum2')

        const btn_get_Values = page.locator("")
        let num1 = 124;
        let num2 = 123;

        await sum1input.type(""+num1)
        await sum2input.type(""+num2)
        await btn_get_Values.click()

        const result = page.locator("#addmessage");
        console.log("The result is" + result.textContent())
        expect(result).toHaveText("Some Text Here")
    });
});
