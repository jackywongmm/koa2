// async function testAsync(){
//     return 'Hello async'
// }

// async function test(){
//     const v1=await getSomething();
//     const v2=await testAsync()
//     console.log(v1,v2)
// }

// function getSomething(){
//     return 'something'
// }

function loading (){
    return new Promise(resolve=>{
        setTimeout(() => {
            resolve('loading----')
        }, 2000);
    })
}
async function test(){
    const v=await loading()
    console.log(v)
}

test()