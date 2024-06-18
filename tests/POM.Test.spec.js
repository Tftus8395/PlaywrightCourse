import {test,expect} from '@playwright/test'
import { LoginPage } from './Pages/LoginPage.spec'
import { HomePage } from './Pages/HomePage.spec';
import {CartPage} from './Pages/CartPage.spec'

test('test',async({page})=>{

    //Login

    const login = new LoginPage(page);
    await login.gotoLoginPage()
    await login.login('pavanol','test@123')

    //Homepage

    const homePage =new HomePage(page)
    await homePage.addProductTocart('Nexus 6');
    await page.waitForTimeout(5000)
    await homePage.gotocart();

    // Cart

    const cart=new CartPage(page);
    await page.waitForTimeout(3000);
    const status = await cart.checkProductsInCart('Nexus 6')


})