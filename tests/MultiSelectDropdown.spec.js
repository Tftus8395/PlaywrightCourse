const {test,expect} =require("@playwright/test")

test('Handle Multipleoptions',async({page})=>{


   //Multiple option select from dropdown
    // await page.goto("https://testautomationpractice.blogspot.com/");
    // await page.selectOption('#colors',['Red','Blue','Yellow']);

    //Assertion

    //1) check number of options in dropdown
    // const options=page.locator('#colors option')
    // await expect(options).toHaveCount(0);

    //2) check number of options in dropdown using js
     const options= page.locator("#colors option");
     console.log("Number of options:",options.length);
     expect(options).toBe(5)

    await page.waitForTimeout(5000);

})