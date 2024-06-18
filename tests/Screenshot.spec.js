import {tets,expect} from '@playwright/test'

test('Page screenshot',async({page})=>{

    await page.goto('https://www.demoblaze.com/index.html')
    await page.screeshot({path:'tests/Sceenshots',+Date.now()+'HomePage.png'})
})