const {test,expect} =require('@playwright/test')

var userId;
test('Get user',async({request})=>{
    const response=await request.get('https://reqres.in/api/users?page=2')
    console.log(await response.json())
    await expect(response.status()).toBe(200)
})
test('Post request',async({request})=>{
 const response =await request.post('https://reqres.in/api/users?page=2'+userId,
 {data:{"name":"ram","job" :"trainer1"},
   headers:{"Accept":"application/json"}
 });
  console.log(await response.json())
  await expect(response.status()).toBe(201)
var res =response.json()
userId=res.id;

})
test('Put request',async({request})=>{
    const response =await request.put('https://reqres.in/api/users/'+userId,
    {data:{"name":"ram","job" :"engineer"},
      headers:{"Accept":"application/json"}
    });
     console.log(await response.json())
     await expect(response.status()).toBe(200)
   
   })
   

