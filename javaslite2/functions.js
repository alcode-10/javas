 //function definition
 function sayMyName()
 {
    console.log('M')
    console.log('A')
    console.log('N')
    console.log('A')
    console.log('S')
    console.log('V')
    console.log('I')
 }
 //reference
 //sayMyName,if this is executed,no output,only reference h 
 //execute
 //sayMyName()
 function addNumbers(num1,num2){//data type nhi bhejt=ye,js assumes apne aap
    console.log(num1+num2);
    return (num1+num2)//no statement after this is executed
 }
//if value is not returned,result will display undefined
 const result = addNumbers(4,5)//if we pass string,concatentation takes place in above function,if we pass null,it will treat that number as 0 
 console.log(result);
 //if a string is not passed in a function,undefined is returned

 function loginUserMessage(username="haa")//if i give some value here and pass nothing,ithe given value will execute otherwise the passed value will be executed
 {
    if(username==undefined)
    {
        console.log("Username toh sahi daliye ji")
        return
    }
    return `${username} ne abhi abhi login kiya`
 }
 //console.log(loginUserMessage("Manasvi"))
 console.log(loginUserMessage("hehe"))

 //CONCEPT OF REST AND SPREAD OPERATOR
 function calculateCartPrice(val1,val2,...number1)//...number 1 is call rest operator form where all the value passes to the function will be put inside an array
 //if we write(val1,val2,...number1)//the first values are put inside val1,val2 and rest of the values inside the array
 {
    return number1
 }
 console.log((calculateCartPrice(200,400,300,3000,1000)))

 //Passing of Objects
 const user={
    username:"manasvi",
    age:"20",
    price:"2000"
 }
 function objectHandle(koibhi){
    console.log(`Username ${koibhi.username} jiski umar ${koibhi.age} hai,usne ${koibhi.price} ka samaan khareeda`)
 }
 objectHandle(user);//direct passing of objects is allowed*/

 //Passing of Arrays
 const myArray=[2,3,4,5,6]
 function returnThirdValue(getArray){
    console.log(getArray[2])
 }
 returnThirdValue(myArray)

