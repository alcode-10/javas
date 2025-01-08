//browser ke andar sabse zyada global object is windows
const user=
{
    username:"manasvi",
    age:20,

    welcome:function()
    {
        console.log(`${this.username},welcome ji`)
        console.log(this)//yeh jo line h yeh tumhe current context degi ehich means jitne bhi current variables h wo sab jo present h
    }
}
//now run
// user.welcome()
// user.username="sam"
// user.welcome()
console.log(this);//this will execute
function hehe()
{
    let username="manasvi"
    console.log(this.username)//thiscwill give undefined,this doesnt work in the function
}
hehe()


const chai =  () => {
    let username = "hitesh"
    console.log(this);
}


// chai()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// const addTwo = (num1, num2) =>  num1 + num2

// const addTwo = (num1, num2) => ( num1 + num2 )

const addTwo = (num1, num2) => ({username: "hitesh"})


console.log(addTwo(3, 4))


// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach()

