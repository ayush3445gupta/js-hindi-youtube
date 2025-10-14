// singleton
// Object.create
// object literals


// how to use symbol as key in objects
const mySym = Symbol("key1")

const jsUser = {
    name:"ayush",
    age :18,
    [mySym]:"key1",
    location :"varanasi",
    email : "ayush@google.com",
    lastLoginDays :["Monday","Tuesday"]
}

// console.log(jsUser.email)
// console.log(typeof jsUser[mySym])

jsUser.email="ayush@gmail.com"
// Object.freeze(jsUser)
jsUser.email="iwvsndsf"

// console.log(jsUser)


jsUser.greeting = function(){
    console.log("hello ayush");
}

jsUser.greetingTwo = function(){
    console.log(`hello ayush, ${this.name}`);
}
// console.log(jsUser.greetingTwo())

// object can be accessed using . or []

//*************************************** */


const tinderUser = new Object()

tinderUser.id = "237ndkf"
tinderUser.name = "rihsika"
tinderUser.isLoggedIn = false
// console.log(tinderUser)

const regularUser ={
    email:"ayiafhs",
    fullname:{
        userfullname:{
            firstname:"ayush",
            lastname:"gupta"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname);

const obj1 ={1:"a",2:"b"}
const obj2 = {3:"c",4:"d"}

// 2 ways to create a new object and copy 1 and 2 into it
// 1.  const obj3 = Object.assign({},obj1,obj2)

// 2. const obj3 = {...obj1,...obj2}


// console.log(obj3);


// this returns values in an array

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));

// // to print key values in separate arrays

// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLogged'));




// ********************************

const course = {
    coursename :"dfks",
    price:"345",
    courseInstructor:"ayush"
}

// how to destructure objects
// course.courseInstructor

const {courseInstructor} = course

// we can also rename keys 
const {courseInstructor:instructor}=course
console.log(instructor);

// JSON API FORMAT

// {
//     "name":"ayush",
//     "id":394,
//     "node_id":3452  
// }

// [
//     {},
//     {},
//     {}
// ]

