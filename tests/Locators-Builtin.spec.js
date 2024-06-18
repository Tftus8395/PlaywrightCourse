const {test,expect} =require('@playwright/test')
test(' uilt-inLocators',async({page})=>{
     await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

     // page.getByAltText() - to locate an element, usually image, by its text alternative
     const logo =await page.getByAltText('company-branding');
     await expect(logo).toBeVisible();
      
     // page.getByPlaceholder() - to locate an input by placeholder.
     await page.getByPlaceholder('Username').fill("Admin");
     await page.getByPlaceholder('Password').fill('admin123');

    // page.getByRole() to locate by explicit and implicit accessibility attributes.
     await page.getByRole('button',{type:'submit'}).click();
      
     await page.getByText('My Info').click();
     
     page.waitForSelector('Employee Id');
     await page.getByLabel('Employee Id').clear();
     await page.getByLabel('Employee Id').fill('sameer.123');

})