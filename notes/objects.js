function multipleby5(num)
{
    return num*5;
}

//suppose
multipleby5.power=2;
console.log(multipleby5.power);//this shows that function points to a object
console.log(multipleby5.prototype);//function points to prototype
console.log(multipleby5(5));

//har cheez object hoti h js mein
//everything has a prototypre as object and object ultimatley point to null

function createuser(username,score)
{
    this.username=username;
    this.score=score;
}

//in the predefined prototype,we can inject our own properties or functions that are defined by user
///eg
createuser.prototype.increment=function()
{
    this.score++;//this can be used as jisne bhi bulaya h uske paas jao
}

createuser.prototype.printme=function(){
    console.log(`score is ${this.score}`);
}
//definition of custom functions ke liye use prototype 
//acess ke liye simply use name
//suppose i made two calls
const chai= new createuser("chai",25);//this creates no error
//new create new object
//new object gets linked to a prrototype property of constructor function
const tea=createuser("tea",250);

chai.printme()




/*

Here's what happens behind the scenes when the new keyword is used:

A new object is created: The new keyword initiates the creation of a new JavaScript object.

A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. This means that it has access to properties and methods defined on the constructor's prototype.

The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.

The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.

*/





