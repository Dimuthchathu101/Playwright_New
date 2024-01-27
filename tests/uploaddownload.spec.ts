import {test} from "@playwright/test"

test('Download Files', async({page}) => { 
    await page.goto("https://www.lambdatest.com/selenium-playground/generate-file-to-download-demo")
    await page.type("#textbox","Hello Dimuth");
    await page.click("id=create")
    // await page.click("id=link-to-download")
    const [download] = await Promise.all([
        page.waitForEvent("download"),
        page.click("id=link-to-download")
    ])
    // const path = await download[0].path();
    // console.log(path)
    const fileName = download[0].suggestedFileName()
    download[0].saveAs(fileName)
 })

 test.only('Upload Files', async({page}) => { 
    // await page.goto("https://blueimp.github.io/jQuery-File-Upload/")
    // await page.setInputFiles("input[type='file']",["uploadItems/dimuth.png"])

    const [uploadFiles] = await Promise.all([
        page.waitForEvent("filechooser"),
        page.click("input[type='file']")
    ])

    const isMultiple = uploadFiles.isMultiple()
    console.log(isMultiple)
    uploadFiles.setFiles(["uploadItems/dimuth.png"])

    await page.waitForTimeout(3000);
 })