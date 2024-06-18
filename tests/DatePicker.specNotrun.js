const {test,expect}=require('@playwright/test')

test ("Pick a Date",async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/')
    //await page.fill('#datepicker','05/10/2024')

    const month ="May"
    const date ="10"
    const year="2024"

    while (true){

        const currentyear=await page.locator("//span[@class='ui-datepicker-year']").textContent()
        const currentmonth =await page.locator('.ui-datepicker-month').textContent()
        

        if(currentyear==year && currentmonth==month){
            break;
        }
        await page.locator("[title='Next']").click()

    }await page.$$("//a[@class='ui-state-default']")

    // date selection using  loop

    for(const dt of date){
        if(await dt.textContent()==date){
            await dt.click()
            break;
        }
    }


     
    await page.waitForTimeout(5000)
    
})