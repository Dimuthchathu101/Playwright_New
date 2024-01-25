import {test} from "@playwright/test"

test('Handling Dropdowns', async({ page }) => { 
    await page.goto("https://www.lambdatest.com/selenium-playground/select-dropdown-demo");
    await page.selectOption("#select-demo",{
        label: "Tuesday"
    })
    await page.waitForTimeout(3000)
 })

 test('Handling Dropdowns - Multi', async({ page }) => { 
    await page.goto("https://www.lambdatest.com/selenium-playground/select-dropdown-demo");
    await page.selectOption("#select-demo",{
        label: "Tuesday"
    })
    await page.waitForTimeout(3000)

    await page.selectOption("#multi-select", [{
        label: "Texas"
    },{
        index: 2
    }])
 })