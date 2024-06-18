import {test,expect} from '@playwright/test'
test.beforeAll(async()=>{

    console.log('This is beforeAll hook')      //1
})
test.afterAll(async()=>{

    console.log('This is afterAll hook')           //8
})

test.beforeEach(()=>{

    console.log('This is beforeEach  hook')       //2    //5
})
test.afterEach(()=>{
                                                   
    console.log('This is afterEach hook')            //4  //7
})
test.describe('Group1',()=>{

    test('Test 1',async({page})=>{             //3
        console.log ('This is Test 1')
    })
    test('Test 2',async({page})=>{
        console.log ('This is Test 2')
})

})
test.describe('Group 2',()=>{
test('Test 3',async({page})=>{
    console.log ('This is Test 3')
})                                                 //6   
test('Test 4',async({page})=>{
    console.log ('This is Test 4')
})

})

