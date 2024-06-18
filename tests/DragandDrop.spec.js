const {test,expect} =require("@playwright/test")
test ("Drag and drop",async({page})=>{
    await page.goto('http://www.dhtmlgoodies.com/scripts/drag-drop-custom/demo-drag-drop-3.html')
    const source=await page.locator('#box5')
    const target=await page.locator('#box105')
     
    // await source.hover()
    // await page.mouse.down()

    //  await target.hover()
    //  await page.mouse.up()

await source.dragTo(target)

    await page.waitForTimeout(5000)


})