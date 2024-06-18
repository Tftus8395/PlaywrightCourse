const {test,expect}=require("@playwright/test")
test("Handle Keyboard",async({page})=>{
    await page.goto('https://gotranscript.com/text-compare')
    await page.fill('[name="text1"]','Welcome to automation')

     //press ctl+A  --select  a text
     await page.keyboard.press('Control+A')

     // press ctrl+c ---copy the text

      await page.keyboard.press('Control+C')

      // press tab

      await page.keyboard.down('Tab')
      await page.keyboard.up('Tab')

      //press ctrl+V  -- paste the text

      await page.keyboard.press('Control+V')

      await page.waitForTimeout(5000)

})

//tests/uploadfiles/Report.sheet.xlsx