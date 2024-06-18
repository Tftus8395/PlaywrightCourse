exports.CartPage=class CartPage{
    constructor(page){
        this.page=page;
        this.noOfProducts="//tbody[@id='tbodyid']/tr/td[2]"
    }
    async checkProductsInCart(ProductName){
        const ProductsInCart = await this.page.$$(this.noOfProducts);
        for(const product of ProductsInCart)
        {
           console.log(product.textContent())
           if(ProductName===await product.textContent()){
            return true;
            break

           }
        }
    }
}