
// JSON (JavaScript Object Notation) is a lightweight data-interchange format 
// that is easy for humans to read and write, and easy for machines to parse and generate.  
 
//!  Advantages of JSON: - 

//? Human-Readable:

//  JSON's structure is easy for developers to understand and  write. 

//? - Lightweight: 

// JSON is a minimal format that reduces the size of the data being transmitted. 

//? - Language-Independent:

//  JSON can be used with many programming languages, 
// including JavaScript, Python, Ruby, Java, etc. 




// !  1.  JSON.stringify()

// this method is used to convert any javascript object into json.
// typeof json is string. 

let student ={
    sname:"rahul",
    age:10
}

console.log(student)

let jsondata = JSON.stringify(student)

console.log(typeof student)

console.log(jsondata)

console.log(typeof jsondata)


// !  2. JSON.parse()

// it is used to covert jsondata into javascript object. 


let student2 = JSON.parse(jsondata)

console.log(student2)



// ! How to take data from the user 

// let sname = prompt("enter your name")
// let age = prompt("enter your age")
// let phNo = prompt("enter your phone number")


// alert(sname)
// alert(age)
// alert(phNo)


// let num1 = parseInt( prompt("enter first number"));
// let num2 = parseInt( prompt("enter second number"));

// let sum = num1 + num2 

// alert(sum)


console.log("20")

console.log(parseInt("20"))          // 20

console.log(parseInt("abc"))       // NaN

console.log(parseInt("20abc"))   // 20

console.log(parseInt("20a10"))   // 20 

console.log(parseInt("abc20"))   // NaN


// !  difference between == and === 

console.log(20 == "20")     // true
console.log(20 === "20")   // false



console.log(10 != "10")      // false
console.log(10 !== "10")    // true