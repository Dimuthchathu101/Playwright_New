const { test } = require ("@playwright/test");

test('Handling Frames', async ({ page }) => { 
    await page.goto("https://letcode.in/frame");
    const allFrames = page.frames();
    console.log("Number of Frames: " + allFrames.length);

    const frame =page.frameLocator("firstFr")
    await frame.locator("input[name='fname]").fill("Dimuth")
    await frame.locator("input[name='lname]").fill("Bandara")

    // Nested Frames
    const innerFrame = frame.frameLocator("iframe[src='innerFrame']")
    await innerFrame.locator("input[name='email']").fill('dimuthcbandara97@gmail.com')

    await frame.locator("input[name='fname'").fill("letcode");
    
    // const myFrame = page.frame("firstFr")
    // // if(myFrame!= null){
        
    // // }
    // await myFrame?.fill("input[name='fname']", "Dimuth C")
    // await myFrame?.fill("input[name='lname']", "Bandara")

    // await page.waitForTimeout(3000);
});


 // 02:10: 00