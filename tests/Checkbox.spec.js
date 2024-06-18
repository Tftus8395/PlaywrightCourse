const {test,expect}=require("@playwright/test")

test("handle checkboxes",async({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/");

    //single checkbox 
    await page.locator("//input[@id='sunday']").check();
    await page.locator("//input[@id='monday']").check();
    await page.locator("//input[@id='thursday']").check();

    await page.waitForTimeout(5000);

    await page.locator("//input[@id='sunday']").uncheck();
    await page.locator("//input[@id='monday']").uncheck();
    await page.locator("//input[@id='thursday']").uncheck();

    await page.waitForTimeout(5000);
    //multiple checkbox

    const checkboxlocators =[

         "// input[@id='sunday' and @type='checkbox']",
         "// input[@id='monday' and @type='checkbox']",
         "// input[@id='thursday' and @type='checkbox']",
    ]

    for(const locators of checkboxlocators){
         await page.locator(locators).check();

    }
    await page.waitForTimeout(5000);
    
    for(const locators of checkboxlocators){
        if(await page.locator(locators).isChecked()){
            await page.locator(locators).uncheck();
        }
        
   }
   await page.waitForTimeout(5000);

})