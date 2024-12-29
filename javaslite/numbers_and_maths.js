//defining a number
const score=400
console.log(score)
//this will return the data type according to its understanding
const balance=new Number(1000)
console.log(balance)
//this will give return type as number only
console.log(balance.toString())
//console.log(typeof(balance)) 
console.log(balance.toFixed(3))//this gives the precision value,not after the decimal point but as a whole upto n places
const otherNumber=1145.98
console.log(otherNumber.toPrecision(3))

//for easy identification of values
const oNumber=10000000
console.log(oNumber.toLocaleString('en-IN'))

//MATHS
console.log(Math.abs(-4))
console.log(Math.abs(4))
console.log(Math.round(4.7))
console.log(Math.ceil(4.2))
console.log(Math.floor(4.7))
console.log(Math.min(4,3,2,1))
console.log(Math.max(4,3,2,1))

console.log(Math.random())
console.log((Math.random()*10)+1)
console.log(Math.floor(Math.random()*10)+1)

const max=20
const min=10

console.log(Math.floor(Math.random() * (max-min+1))+min)




