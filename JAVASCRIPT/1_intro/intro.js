
//! how to print 

console.log("I am external js file");

let personName = "santhosh";
console.log(personName);

var age = 21 ;
console.log(age);

var age = 22;

console.log(age);

// let personName;

const adhaarNo = 123456789123;

// ! 1. primitive datatypes 

//! i>  Number 

let mobileNumber = 9734562312 ;
console.log(mobileNumber)
console.log(typeof mobileNumber)


let amount= 20000.80

console.log(amount)
console.log(typeof amount)


// ! ii> boolean 

let hasGF = true ;
let hasChildren = false;

console.log(typeof hasGF)
console.log(typeof hasChildren)

// ! iii> string 

let favActor = "vijay"
let favActress = 'samantha'
let secondFavActor = `diwakar`

console.log(typeof favActor)
console.log(typeof favActress)
console.log(typeof secondFavActor)


// ! iv>   undefined 

// any variable that is declared but not initialized.
// typeof undefined is undefined.

let city

console.log(city)
console.log(typeof city)

// ! v> null 


let salary = null

console.log(salary)
console.log(typeof null)  // object


// ! vi>   bigint 


let large = 2n

console.log(large)
console.log(typeof large)


// ! Non-Primitive Datatypes 

// ! 1. Array 

let subjects = ["html",'css',`javascript`]

console.log(subjects)

let arr = [10, "hello", true, undefined,[40,50]]

console.log(arr)


// !  2. function 


function display()
{
    console.log("I am display function....")
}

display()
display()


// ! 3. Object 


let student = {

    sname:"virat",
    age:10
}

console.log(student)
console.log(student.age , student.sname)