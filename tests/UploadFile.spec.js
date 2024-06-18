const {test,expect} =require("@playwright/test")
test ("Drag and drop",async({page})=>{

    await page.goto('https://ps.uci.edu/~franklin/doc/file_upload.html')
    await page.waitForSelector('[name="userfile"]')
    await page.locator('[name="userfile"]').click().setInputFiles('tests/uploadfiles/Report.sheet.xlsx')
    //await page.setInputFiles('tests/uploadfiles/Report.sheet.xlsx')

    await page.waitForTimeout(5000)

})