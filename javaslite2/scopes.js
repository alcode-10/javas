//global scope-outside any curly braces,available for the whole program
//block scope-inside curly braces
//var keyword is global scoped,and function scoped where it is acessible inside a function it is declared
//let,const are block scoped which means they can be only accessed within a block where they are declared
var b=9
function hehe(){
    var a=10
}
console.log(a,b);

if (true) {
    const username = "hitesh"
    if (username === "hitesh") {
        const website = " youtube"
        // console.log(username + website);
    }
    // console.log(website);//outside block scope
}

// console.log(username);//outside block scope


// ++++++++++++++++++ interesting ++++++++++++++++++


console.log(addone(5))//will not give error

function addone(num){
    return num + 1
}



addTwo(5)//will give error as function definition is hold in a variable
const addTwo = function(num){
    return num + 2
}