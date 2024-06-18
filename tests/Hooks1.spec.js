const {test,expect}=require ("@playwright/test")
test('Home Page',async({page})=>{
    
    await page.goto('https://www.demoblaze.com/index.html');
     await page.click('id=login2')
     await page.fill('#loginusername','pavanol');
     await page.fill("input[id='loginpassword']","test@123");
     await page.click("//button[normalize-space()='Log in']");

     //Home page

     const products= await page.$$('.hrefch')
     await expect(products).toHaveLength(9)

     //logout

     await page.locator('#logout2').click()
})

     test('Add to Cart',async({page})=>{

        //Login 
        await page.goto('https://www.demoblaze.com/index.html');
        await page.click('id=login2')
        await page.fill('#loginusername','pavanol');
        await page.fill("input[id='loginpassword']","test@123");
        await page.click("//button[normalize-space()='Log in']");

        //Add to cart

        await page.locator("//a[normalize-space()='Samsung galaxy s6']").click()
        await page.locator("//a[normalize-space()='Add to cart']").click()

        page.on('dialog',async dialog =>{
           await expect(dialog.message).toContain('Product Added')
           await dialog.accept();
        })
        
        //Logout

        await page.locator('#logout2').click()

     })



