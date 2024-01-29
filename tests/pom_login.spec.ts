import { test } from "@playwright/test";
import { RegisterPage } from "../pages/registerPage";

test('POM', async ({ page }) => {
    const register = new RegisterPage(page);
    await page.goto("https://www.lambdatest.com/selenium-playground/select-dropdown-demo");
    await page.selectOption("#select-demo", {
        label: "Tuesday"
    });
    await page.waitForTimeout(3000);
});
