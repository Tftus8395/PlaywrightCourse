const {test,expect}=require("@playwright/test")
test.skip("Aler with Ok",async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/")


    //Enabling the dialog window for alert 
    page.on('dialog',async dialog=>{
       
        expect(dialog.type()).toContain("alert")
        expect(dialog.message()).toContain("I am an alert box!")
        await dialog.accept();
        
    })
    await page.locator("//button[normalize-space()='Alert']").click()

    await page.waitForTimeout(5000)
})

    //Enabling the dialog window for confirm box
    test("Confirm Box",async({page})=>{
        await page.goto("https://testautomationpractice.blogspot.com/")

    page.on('dialog',async dialog=>{
       
        expect(dialog.type()).toContain("confirm")
        expect(dialog.message()).toContain("Press a button!")
        await dialog.accept();
        //await dialog.dismiss();
        
    })
    await page.locator("//button[normalize-space()='Confirm Box']").click();
    await expect(page.locator("//p[@id='demo']")).toHaveText('You pressed OK!');

    await page.waitForTimeout(5000)
})
//Enabling the dialog window for Prompt
test("Prompt",async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/")

    page.on('dialog',async dialog=>{
       
        expect(dialog.type()).toContain("prompt")
        expect(dialog.message()).toContain("Please enter your name:")
        expect(dialog.defaultValue()).toContain("Harry Potter")
        dialog.accept("john");
        //await dialog.accept();
        //await dialog.dismiss();
        
    })
    
    
    await page.locator("//button[normalize-space()='Prompt']").click();
    await expect(page.locator("//p[@id='demo']")).toHaveText('Hello john! How are you today?');

    await page.waitForTimeout(5000)
});