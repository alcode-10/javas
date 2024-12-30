//ways to declare an array in js
const myArr=[1,2,3,4,5,"manasvi","riya"]
const myArr2=new Array(2,3,4,5)
console.log(myArr[5]);//way to acess an element in an array

//methods of array

myArr.push(7)
//console.log(myArr)
myArr.pop()//removes last element
//console.log(myArr)

myArr.unshift(10)//insert the given argument at starting of an array
console.log(myArr)
myArr.shift()//delete the element from starting of an array
console.log(myArr)

//question methods
console.log(myArr.includes(8))//boolean return type
console.log(myArr.indexOf(5))//int return type

const newArr= myArr.join()//binds the array values into a string seprated by commas
console.log(newArr)

//slice and splice methods

console.log("a ",myArr)
const newArr1=myArr.slice(0,3)//does not include the value of last index
console.log(newArr1)
const newArr2=myArr.splice(0,6)//remvoes the number of element from 0 upto 6
console.log(newArr2)
console.log(myArr)//original array is modified





