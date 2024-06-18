const {test,expect}=require('@playwright/test')

test("Handel inner frame",async({page})=>{
    await page.goto("https://ui.vision/demo/webtest/frames/")
    const frame3=await page.frame({url :'https://ui.vision/demo/webtest/frames/frame_3.html'})
    await frame3.locator("//input[@name='mytext3']").fill("Wecome");

    //nested Frame

    const childframe = await frame3.childFrames();
    childframe[0].locator("//div[@id='i5']/div/div['.AB7Lab Id5V1']").click()

    await page.waitForTimeout(5000)

})