const { test,expect } = require("@playwright/test");

test("handle MouseHover",async({page})=>{

    await page.goto('https://stqatools.com/demo/MouseHover.php')
   const mousebutton= await page.locator("//button[@class='dropbtn']");
   mousebutton.hover();

   await page.locator("//a[normalize-space()='Link 1']").click();
const text=await page.locator("//div[@class='modal-content']").textContent()
console.log(text)
expect(text).toBe('You click on Dropdown hover Option')

//    await expect(text.textContent())
   await page.waitForTimeout(5000)
   

}
)

