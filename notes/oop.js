//OBJECT LITERAL
const user={
    username:'manasvi',
    logincount: 8,
    signedin:true,

    getuserdetails: function()
    {
        //console.log("database se details mile") ;
       // console.log(this)
    }  

} //basic unit

// console.log(user.username)
// console.log(user.getuserdetails())//pass the function name not the reference ie with bracks
// console.log(this)//give empty value because global context mein kuch nhi h
//browser par karoge this toh global context mein window related stuff milega

//context-this
//to get the current context,include the execution context

//-------------------------------------------------------------------------------------------------------------------

//CONSTRUCTOR FUNCTIONS

//const promiseone = new Promise()//here new is a constructor function that is used to create new contexts

function User(username,logincount,isloggedin)
{
    this.username=username;
    this.logincount=logincount;
    this.isloggedin=isloggedin;
    
    return this;
}
//current object context is returned

const userone=User('manasvi',12,true);//userone store the object
console.log(userone) //node ke andar getterv seeter, fetch... many properties come 

//new keword-empty object is created
//constructor function get call and give all values
//eveytime i use a new keyword,new context or copy(object) will be made which will not be affected by anything else
//also if we dont use new keywords,it means,same value will be overwritten and boom not good
