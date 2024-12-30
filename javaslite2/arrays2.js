const types=["federal","dictatorship","capitalism"]
const ideas=['communism','socialism','imperialism','marxism','feminism']

//methods to merge arrays
//types.push(ideas)//pushes the whole array as a single element
//console.log(types)

//to not push it as a element but as individual entities
//const newArr=types.concat(ideas)//use another array to print the same
//console.log(newArr)

//other way to spread the arrays to be concatenated

const newArr=[...types,...ideas]
//console.log(newArr)

//using flat method to speard all array elements inside an array
const otherArray=[1,[2,3],4,[5,6],7,[8,9,10]]
const mod_array=otherArray.flat(2)//the argument refers to depth,ki kitne depth tk flat karna
console.log(mod_array);

//some more methods
console.log(Array.isArray("manasvi"))
//to convert the given string to array
console.log(Array.from("manasvi"))
//can't convert so returns empty array
console.log(Array.from({name: "manasvi"}))

//can convert a set of  values to an array too
let score1=100
let score2=200
let score3=300
console.log(Array.of(score1,score2,score3))





