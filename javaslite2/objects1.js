//if object is created using literals,then its not singleton
//if created with literals,its called singleton
//Object.create=it is for singleton or constructor method 
//way to declare object
//literals

//to use symobol as a key,first declare it
const mySym=Symbol("key1")
const jsUser={
    name:"Manasvi",//key:value,here key is treated as a string
    "full_name":'Manasvi bansal',
    age:20,
    [mySym]:"mykey1",//use the value of symbol inside the square bracket,with bracket,symbol form will be printed otherwise string form
    gender:"Female",
    email:"manasvi@google.com",
    isLoggedIn:true,
    //you can add arrays too inside an object
    lastLogInDays:["Monday","Wednesday"]
//to acess object elements
}

console.log(jsUser.gender)//using dot
console.log(jsUser["name"])//using square brackets,since it is treated as string,send it like that
//if a key is declared as string,only square bracket method is valid for acessing object elements
console.log(jsUser["full_name"])
console.log(jsUser[mySym])//to access a symbol

//to change values
jsUser.age=19
Object.freeze(jsUser)//if this is used any changes made inside the objects after this will not be made inside the object
jsUser.age=21
console.log(jsUser);

//use of functions,now to put functions inside object,unfreeze it then only you can do changes
jsUser.greetings=function(){
    console.log("hello ji");
}
console.log(jsUser.greetings())//this prints value of function
//console.log(jsUser.greetings)//this prints the reference of a function
jsUser.greetings2=function()
{
    //now to include any other value of object inside function
    //use string interpolation,``
    console.log(`Hello ji,${this.email}`);//this is used to refer to current object 
}
console.log(jsUser.greetings2())
    

