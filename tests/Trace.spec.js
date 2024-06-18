const { test,expect } = require("@playwright/test");

test('Trace',async({page})=>{
    
    await page.goto('https://www.demoblaze.com/index.html');

    //await page.waitForEvent();
    //click on login button --property
     //await page.locator('id="login2').click();
     await page.click('id=login2')

     // provide username --css
     //await page.locator('#loginusername').fill('pavanol');
     await page.fill('#loginusername','pavanol');
    
     //provide password  --css
     await page.fill("input[id='loginpassword']","test@123");

     //click on login button --xpath
     await page.click("//button[normalize-space()='Log in']");

   
     await page.locator('#logout2').click()




})