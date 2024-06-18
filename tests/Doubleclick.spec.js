const{test,expect}=require("@playwright/test")
test("Mouse dubleclick",async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/")
    await page.locator("//button(normalize-space()='")
    const doubleclick=await page.locator('//button[normalize-space()="Copy Text"]')
    await doubleclick.dblclick();
    const f2=await page.locator('#field2')
    await expect(f2).toHaveValue('Hello World!')
    await page.waitForTimeout(5000)

})