/*const hingeUser=new Object()//singleton object,constructor method

const hingeUser={}//non-singleton object

//defining values
hingeUser.id="1041"
hingeUser.name="Manasvi"
hingeUser.loginStatus=false

//console.log(hingeUser)
//objects within objects
const regularUser={
    name:"manasvi",
    full_name:{
        username:{
            firstname:"manasviiii",
            lastname:"bansal"
        }
    }

}
//console.log(regularUser.full_name.username.lastname);

//merging of two objects
//1*/
const obj1={1:"a",2:"b"}
const obj2={3:"a",4:"b"}
//const obj3={obj1,obj2}//put objects as it is
//console.log(obj3);
//2
//assign(target,source),all the object of the source are copied into target
//const obj3=Object.assign({},obj1,obj2) //target,sources)
//console.log(obj3);

//3
//spreadout method
const obj3={...obj1,...obj2}
console.log(obj3)

//OBJECTS WITHIN ARRAYS
const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
]

users[1].email

// console.log(hingeUser);
//SOME METHODS OF OBJECTS
// console.log(Object.keys(hingeUser));
// console.log(Object.values(hingeUser));
// console.log(Object.entries(hingeUser));

// console.log(hingeUser.hasOwnProperty('isLoggedIn'));
