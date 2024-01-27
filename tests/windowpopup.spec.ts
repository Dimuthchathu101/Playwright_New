import {test} from "@playwright/test"
test('should interact with multipe tabs', async({page}) => { 
    await page.goto("https://www.lambdatest.com/selenium-playground/window-popup-modal-demo");

    console.log(page.url())

    const [multiPage] = await Promise.all([
        page.waitForEvent("popup"),
        page.click("#followboth")
    ])

    await page.waitForLoadState()
    const pages = multiPage.context().pages()
    console.log('Number of tabs'+pages.length)

    
    pages.forEach(tab => {
        console.log(tab.url())
    })

    let facebookPage;
    for (let index = 0; index < pages.length; index ++){
        const url = pages[index].url()
        if(url == "https://www.facebook.com/lambdatest/"){
            facebookPage = pages[index]
        }
    }

    // const [newWindow] = await Promise.all([
    //     page.waitForEvent("popup"),
    //     page.click("Follow on Twitter")
    // ])

    // console.log(newWindow.url())

 })
