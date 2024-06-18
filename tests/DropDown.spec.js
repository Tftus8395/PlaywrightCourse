const {test,expect} = require('@playwright/test')

test("Handle Dropdown",async({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/")
    //await page.locator("#country").selectOption({label:'India'}); //label select visible text
    //await page.locator("#country").selectOption('India');  // select by visible Text
    //await page.selectOption("#country",'India'); //By text
    //await page.locator("#country").selectOption({value:'uk'}); // select by value
     //await page.locator("#country").selectOption({index:2}); //select by index

     // Assertion

     // 1) check number of option in dropdown --Approach 1
    // const options =await page.locator("#country option")
    //  await expect(options).toHaveCount(10);

     //2) check number of options in dropdown --Approach 2
    //   const options=await page.$$("#country option");
    //   console.log("Number of options:",options.length);
        //await expect(options).toBe(10);

    //3) check value presense in dropdown 

    const content  =page.locator("#country").textContent();
    await expect(content.includes('India')).toBeTruthy();
    

     
     await page.waitForTimeout(5000);


})