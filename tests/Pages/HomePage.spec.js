exports.HomePage =class HomePage{

    constructor(page){
        this.page =page;
        this.productList ="//div[@id='tbody' ]/div/div/h4/a";
        this.addtoCartBtn="//a[normalize-space()='Add to cart']";
        this.cart="#cartur";
    }

    async addProductTocart(productname){
        const productList = await this.page.$$(this.productList);
        for(const product of productList){
           if(productname ===await product.textContent()){
            await product.click()
            break;
           }

        }
        await this.page.on('dialog',async dialog=>{
          if(dialog.message().includes('added')){
            await dialog.accept();
          }
        })
    }
    async gotocart(){
        await this.page.locator(this.cart).click();
    }

}