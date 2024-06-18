const {test,expect}=require("@playwright/test")
test("Handle frame",async({page})=>{
 await page.goto("https://ui.vision/demo/webtest/frames/")

 // total frame 
 const allframe=page.frame();
 console.log('Number of frame:',allframe.length);


const frame1=await page.frame({url:'https://ui.vision/demo/webtest/frames/frame_1.html'})
await frame1.fill('name="mytext1"','Hello');

//approach 2

// const inputbox=await page.frameLocator('frame[src="frame_1.html"]').locator('name="mytext1"')
// await inputbox.fill('Hello')

// await page.waitForTimeout(5000)



})