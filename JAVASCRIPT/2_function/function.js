
// !  how to create function 


// !  1. Named Function 

function add()
{
    console.log(3+6)

}

add()
add()
add()


// !  function with parameter 


function sub(a , b)
{
  console.log(a - b);
}

sub(40,10);
sub(80,30);

// !  function with return statement 


function multiply(a , b)
{
   return a * b ;
}

let res = multiply(10, 3)
console.log(res)



// ! 2. anonymous function 

// function()
// {

// }

// !  3. Function With Expression

let display = function()
{
    console.log("I am display function")
}

display()


// !  swap two numbers without using third variable 

let swap =function(a,b)
{
   console.log("Before swap")
   console.log(a,b)

   a = a + b - (b = a)    //! formula ⚗️🧪👨🏻‍🔬

   console.log("after swap")
   console.log(a,b)
}

swap(10,20)
swap(100,500)


// !   count the digits of a number 

let num = 12345;
let count = 0 ; 

while(num > 0)
{
    num = Math.floor(num/10) 
    count++
}

console.log(count);



//! 4.  Arrow Function


let wish = ()=>{

    console.log("good afternoon")
    console.log()
}

wish()

//! reverse one number 

let reverse =(num)=>{

    let rev = 0 
    while(num > 0)
    {
        let d = num % 10 ;
        console.log(d)
        rev = rev * 10 + d
        num = Math.floor( num / 10)
        
    }

    console.log(rev)
}

reverse(123)


// !  5.  Nested function 


let outer = ()=>{

    let num1 = 40 
    console.log(`i am outer function.. num1 value is ${num1} ` )

    let inner =()=>{

        console.log("I am inner function")
    }

    inner()
}
outer()




// !  Lexical Scopping 

// in nested function inner function can access all the properties of outer function but the outer function can not access the properties of inner function , this is called Lexical Scopping.

let parent =()=>{
    let bike = "hero"

    let child =()=>{
        let mobile = "samsung s24"
        console.log(bike)
    }

    // console.log(mobile)
    child()
}
parent()



// !  Higher Oreder Function 



let person =(age)=>{

    console.log("my name is Rahul")
    console.log(age)
}

person(10)

let person2 =(location)=>{
  
    console.log(location)
}

person2("chennai")



let work=()=>{
    console.log("I am working now")
}


let person3=(a)=>{

    a()
}

person3(work)
person3(()=>{
    console.log("i am also working")
})



// !  calculator 


let addition = (a,b)=>
{
   console.log(`the addition of ${a} and ${b} is ${a+b}`)
}

let subtraction =(a,b)=>{
    console.log(`the subtraction of ${a} and ${b} is ${a-b}`)
}

let calculate = ( myFun, num1 , num2 )=>{
    myFun(num1 , num2)
}
calculate(addition,20,30)
calculate(subtraction, 90,10)