const {test,expect, chromium} =require('@playwright/test')

// test.only('test1',async({page})=>{
//     console.log("this is test1")
// })

// test.skip('test2',async({page})=>{
//     console.log("this is test2")
// })
test ('test3',async({page,browserName})=>{
    console.log('this is test3')
 if(browserName==='chromium'){
    test.skip();
 }

}
)
test ('test4',async({page,browserName})=>{
    test.fixme()
    console.log('this is test3')


})
test ('test5',async({page,browserName})=>{
    if(browserName==='chromium'){
        test.fail();
    }
    
})
test ('test6',async({page,browserName})=>{
    test.slow();
    console.log('this is test6')
})