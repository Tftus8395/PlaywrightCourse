const {test,expect}=require("@playwright/test")
const { table } = require("console")
test ("Handle Table",async({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/')
     const table=await page.locator('#productTable')

     //1) count number od column
 const column =await table.locator('thead tr th')
 console.log('Number of column:',await column.count())
 expect(await column.count()).toBe(4)


 //2) count number of rows

 const rows= await table.locator('tbody tr')
 console.log('number of rows:',await rows.count())
  expect(await rows.count()).toBe(5)



  // 3) select checkbox for product 4

  const matchedrow= rows.filter({

    has:page.locator('td'),
    hasText : 'Product4'
    
  })
  await page.waitForTimeout(3000)
  await matchedrow.locator("//input[@type='checkbox']").click()

//   await selectproduct(rows,page,'Product 1')
//   await selectproduct(rows,page,'Product 3')
//   await selectproduct(rows,page,'Product 5')
 
// 4) Print all the product details using loop


//5) readthe data from all pages

const pages = await page.locator('.pagination li a')
console.log('Number of pages:',pages.count())

for(let p=0;p<await p.count();p++){
    if (p>0)
    {
        await pages.nth(p).click()
    }
        for(let i=0;i<await rows.count();i++)
{
     const row = rows.nth(i)
     const tds=rows.locator('td')
     for(let j=0;j<await column.count();j++)
     {
        console.log(await tds.nth(j).textContent())
     }
}

    
}

  // 6) select multiple product by re-usable function

  async function selectproduct(rows,page,name)
  {
    const matchedrow= rows.filter({

        has:page.locator('td'),
        hasText : name
        
      })
      await page.waitForTimeout(5000)
  }
 

  

 
})