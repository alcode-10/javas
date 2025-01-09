//for of loop
// for (const element of object) {//here object means any data structure which may require a loop
//  //element here means a variable name 
//  //object ki jagah data structure k naam likhna h  
// }
// const arr=[1,2,3,4,5,6,7]
// for (const number of arr) {//ekdum iski tarah for(auto i:arr) of c++
//     console.log(number)
// }

//Maps
//Difference between af map and an object-Both hold key-value pairs but map remembers the order you store in 
//whereas object randomizes it
//they only store unique values
// const map=new Map()
// // map.set()//to insert values in a map
// map.set("M","Monkey,jo ki main hoon")
// map.set("P","Pig,jo ki Manu h")
// map.set("G","God,jo hamare Bhagwan h")
// console.log(map);
// //applying a loop
// for (const [key,val] of map) {//[key,val],destructuring
//     console.log(`${key} -> ${val}`);
// // }

//Object
//THEY ARE NOT ITERABLE AS MAPS
//wE USE FOR-IN LOOPS FOR THE SAME
// const abb={
//     n:"nature",
//     m:"mature",
//     s:"saturate"
// }
// for (const key in abb) {
//     console.log(`${key} se ${abb[key]}`)//object[key] is to used to acess value of key
//     }
//forin loops majorly prints the keys,like in arrays it prints index of the values,so inorder to acess it we have
//to write datastructure_name[key] to print the value
//maps are not iterable using forin loops

//FOR EACH LOOP
// The forEach() method calls a function for each element in an array.
// The forEach() method is not executed for empty elements.

const arr=[1,2,3,4,5,6]
// arr.forEach(function hehe(val){
//     console.log(val)
// })

//We can use arrow functions also
arr.forEach((val)=>{
    //console.log(val)
})
//predeclare function ka only referece bhi deskte or naam
function abc(val)
{
   // console.log(val)
}
arr.forEach(abc)

//Extended syntax

// arr.forEach((val,index,arr)=>
// {

// })

//Acessing an object value inside an array using forEach loop
const obj=[
    {
        time:"10",
        day:"Monday"
    },
    {
        time:"11",
        day:"Tuesday"
    },
    {
        time:"12",
        day:"Wednesday"
    }
]

obj.forEach((val)=>
{
    console.log(val.day)//in the same way we can acess time also
})
