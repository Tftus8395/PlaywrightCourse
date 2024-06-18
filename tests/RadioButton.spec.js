const {test,expect} = require("@playwright/test")

test("handle radiobutton",async({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/')
    await page.locator("//input[@id='female']").check();
    await page.check("//input[@id='female']");
    await expect(page.locator("//input[@id='female']")).toBeChecked();
    await expect(await page.locator("//input[@id='female']").isChecked()).toBeTruthy() //female
    await expect(await page.locator("//input[@id='male']").isChecked()).toBeTruthy(); //male
    await page.waitForTimeout(5000);




})