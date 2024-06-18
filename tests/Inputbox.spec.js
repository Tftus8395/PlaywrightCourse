const {test,expect} = require("@playwright/test")

test("handle inputbox",async({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/')
    await expect (page.locator("#name")).toBeVisible();
    await expect(page.locator("#name")).toBeEmpty();
    await expect(page.locator("#name")).toBeEditable();
    await expect (page.locator("#name")).toBeEnabled();

    await page.fill("#name",'Sakshi');
    await page.waitForTimeout(5000); //paused code
})