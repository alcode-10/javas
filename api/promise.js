// const promises = new Promise(function(resolve,reject){ //resolve reject are associated with promises
//     //do an async task
//     //db calls, cryptography, network

//     setTimeout(function(){
//         console.log('async task is complete')
//         resolve()//now connected to then()
//     },1000)
// })

// promises.then(function(){
//     console.log("Promise Consumed")//this will not execute unless connescted with resolve
// })//then function is associated with resolve

// other way

new Promise(function(resolve,reject){
   setTimeout(function(){
    console.log('async task 2 is complete')
    resolve()
   },1000)
}).then(function(){
    console.log("resolved")

})
//when we are sending some data through resolve
const thirdPromise = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({username:"alcode-10",email:"manasvi@example.in"})
    },1000) 
})

thirdPromise.then(function(user)//used to take data received from resolve
{
    console.log(user)

})
const promisefour = new Promise(function(resolve,reject)
{
    setTimeout(function()
{
    let error=true;
    if(!error)
    resolve({username:"manasviii",password:"hehe"})
    else
    reject('Something went wrong')
},1000)
})
promisefour
.then((user) => {
    console.log(user)
    return user.username;
})
.then((username) =>{//username recieved from above func,promise resolve
    console.log(username)
})
.catch(function(error)//error aaaya
{
    console.log(error); 
}).finally(()=> {
    console.log("the promise is either resolved or rejected");
    
})//final kya hua


const promisefive = new Promise(function(resolve,reject){
     setTimeout(function()
{
    let error=true;
    if(!error)
    resolve({username:"js",password:"hehe"})
    else
    reject('js went wrong')
},1000)
})

// //async await is just like then and catch,used for handling responses
// //promise is a object
// async function consumepromisefive(){
//     const response = await promisefive
//     console.log(response)
// }//async await does not directly handle errors and hence if there can be error it will give warning to handle in try catch block but in no erorr it works good
// consumepromisefive()

// // now try using try catch block

async function consumepromisefive(){
    try{
        const response = await promisefive
    console.log(response)
    }
    catch(error)
    {
        console.log(error); 
    }
}
consumepromisefive()


//The await keyword is used to wait for a promise to resolve.
// It can only be used within an async block. 
// Await makes the code wait until the promise returns a result

// async function getalldata()
// {
//     try{
//     const response = await fetch('https://api.github.com/users/alcode-10')
//    // console.log(response)
//     const data=await response.json()//await is used as it takes time to convert
//     console.log(data)
//     }
//     catch(error)
//     {
//         console.log('Something went wrong',error)
//     }
// }
//getalldata()
//writing above function using then catch and finally

fetch('https://api.github.com/users/alcode-10')
.then((response) =>{
    return response.json()})
    .then((data) => {
    console.log(data)
})
.catch((error) => {console.log(error)}
)//response of a fetch is response




// Because fetch() resolves quickly and it runs its .then() (which is a microtask)
// before your setTimeout-based Promises resolve (which are macrotasks scheduled after 1 second).