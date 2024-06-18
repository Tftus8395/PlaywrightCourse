const {test,expect} =require("@playwright/test")

test("Soft assertions",async({page})=>{

    // await page.goto('https://www.demoblaze.com/index.html');
    // await expect(page).toHaveTitle('STOREE');
    // await expect(page).toHaveURL('https://www.demoblaze.com/index.html')
    // await expect(page.locator('.navbar-brand')).toBeVisible();

     await page.goto('https://www.demoblaze.com/index.html');
    await expect.soft(page).toHaveTitle('STOREe');
    await expect.soft(page).toHaveURL('https://www.demoblaze.com/index.html')
    await expect.soft(page.locator('.navbar-brand')).toBeVisible();


})