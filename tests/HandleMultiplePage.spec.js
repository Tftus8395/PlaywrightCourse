import {test,expect, chromium} from '@playwright/test'

test ('Handle Pages/Windows',async()=>{

    const browser = await chromium.launch()
    const context = await browser.newContext()

    const page1 = context.newPage()
    const page2 = context.newPage()

    const allPages=context.pages()
    console.log('Number of pages',allPages.length)

    await page1.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    await expect(page1).toHaveTitle("OrangeHRM")

    await page2.goto('https://www.orangehrm.com/')
    await expect(page2).toHaveTitle("Human Resources Management Software | OrangeHRM")



}
)
test('Handle Multiple Pages/Windows',async()=>{
    const browser =chromium.launch()
    const context = await browser.newContext()

    const page1=context.newPage()
    await expect(page1).toHaveTitle('OrangeHRM')

    const pagePromise = context.waitForEvent('page')
    await page1.locator('//a[normalize-space()="OrangeHRM, Inc"]').click();
    const newPage= await pagePromise;

    await expect(newPage).toHaveTitle('Human Resources Management Software | OrangeHRM')


})