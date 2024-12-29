let myDate=new Date();
console.log(myDate)//unreadable form
console.log(myDate.toString())//readable
console.log(myDate.toDateString())
console.log(myDate.toISOString())//default form
console.log(myDate.toLocaleDateString())
console.log(myDate.toLocaleString())

//months start from 0
//console.log(typeof myDate);
//now
//let myCreatedDate=new Date(2024,11,30,5,3,4)//last three arguments give time
//console.log(myCreatedDate.toLocaleString())
let myCreatedDate=new Date("2024-12-11")//both work,yy-mm-dd or mm-dd-yy
//console.log(myCreatedDate.toLocaleString())
let myTimeStamp=Date.now()//return exact time in milliseconds from 1st jan,1970 to now
console.log(myTimeStamp)
console.log(myCreatedDate.getTime())
//to convert value in seconds,divide by 1000
console.log(Math.floor(Date.now()/1000))

let newDate=new Date();
console.log(newDate)
console.log(newDate.getMonth()+1)
console.log(newDate.getDay())//day starts from sunday=0,1,2,3,....

//customization of to locale string
newDate.toLocaleString('default',
    {
    weekday:"long",
    era:"long",
    dateStyle:"full"
})








