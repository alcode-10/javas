//it is used in order to avoid global pollution caused by global variables
/*(function() {
    // Your code here
})();*/
//the first parenthesisi that wraps it ensured that it is executed as an expression 
//the second paranetheses at the end ensures that it is immediately invoked
//semicolon is important to specify the end
(function hey()
{
    console.log("haha")
})();//can be used simply,use semicolong when you are writing more tha one iife

(()=>{
    console.log("haha")
})();//can be used for arrow function
//we can also pass values in arrow function like
((username)=>{
    console.log(`THE USERNAME IS ${username}`)
})('manasvi_1064');
