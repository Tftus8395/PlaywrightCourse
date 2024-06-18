const {test,expect} =require("@playwright/test")
test("Handle hiddendropdown",async({page})=>{
      
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
    await page.locator("//input[@name='username']").fill("Admin")
    await page.locator("//input[@type='password']").fill('admin123')
    await page.locator("[type='submit']").click();

    await page.locator("//span[normalize-space()='PIM']").click();

    //click on dropdown
     await page.locator("//*[@id='app']/div[1]/div[2]/div[2]/div/div[1]/div[2]/form/div[1]/div/div[6]/div/div[2]/div/div/div[1]")
    
     await page.waitForTimeout(3000)

     const options =await page.$$("//div[@role='option']//span")
     for(let option of options){
        const jobTitle=await option.textContent();
        if(jobTitle.includes('QA Engineer')){
            await option.click()
            break;
        }
     }


    await page.waitForTimeout(5000)



}
)

