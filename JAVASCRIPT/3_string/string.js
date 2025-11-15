

let str1 = 'hello'
let str2 = "HOW ARE YOU"
let str3 = `I Am Fine`


console.log(typeof str1 , str1)
console.log(typeof str2, str2)
console.log(typeof str3 , str3)


// !  how to know the length of the string 

console.log(str2.length)
console.log(` the length of ${str2} is ${str2.length} `)


// !  Methods Of String 

// !  1. toUpperCase()

// this method is used to convert one string into uppercase and it will return one new string original string it will not change.

let upper = str1.toUpperCase()

console.log(upper)
console.log(str1)

// ! 2. toLowerCase()

// this method is used to convert one string into lowercase and it will return one new string original string it will not change.

console.log(str2.toLowerCase())

let lower = str3.toLowerCase()
console.log(lower)


// ! 3. trim()

// it is used to remove the space from both sides of the string.
// it is returing one new string.

let empName = "  Miller kohli "
console.log(empName)
console.log(empName.length)

let emp = empName.trim()
console.log(emp)
console.log(emp.length)

// ! 4. indexOf()

// this method is used to return the index of the given character. 
// it will take the first appearance of the given character.

console.log(empName.indexOf("i"))
console.log(empName.indexOf("l"))

// ! 5. lastIndexOf()

// this method is used to return the index of the given character. 
// it will take the last appearance of the given character.

console.log(empName.lastIndexOf('l'))

// ! 6. charAt()

// this method is used to know the character, present in the given position.

console.log(empName.charAt(12)) 
console.log(empName.charAt(2)) 

// ! 7. includes()

// it is used to know the given string is present or not. 
// if it is present it will return true else it will return false.

let msg = "I am from bangalore"

console.log(msg.includes("bangalore"))
console.log(msg.includes("chennai"))

// ! 8. concat()

// it is used to combine two or more than two strings and it will return one new string.

let str4 = "hello"
let str5 = "how are you"

console.log(str4.concat(" ",str5,"?"))

// ! 9. replace()

// it is used to replace one string with another string. 
// it will replace only the first occurance.

let msg2 = "I am from Bangalore, I love Bangalore"

console.log(str4.replace("l","$")); 

console.log(msg2.replace("Bangalore","Chennai"))


// ! 10. replaceAll()

// it is used to replace one string with another string. 
// it will replace all the occurances of the string.

console.log(str1.replaceAll("l","$"))
console.log(msg2.replaceAll("Bangalore","Chennai"))

// ! 11. split()

// it is used to convert any string into array. 

let str6 = "we love javascript"

console.log(str6.split(" "))
console.log(str6.split(""))
console.log(str6.split())
console.log(str6.split("a"))

// ! 12. slice() 

// it is used to extract one string from another string.
// it takes two parameters(startIndex, endIndex)
// it does not include the end index value.
// it can take negative value also
// by using this method we can extract only from left to right.

let str7 = "hello"

console.log(str7.slice(0,4))
console.log(str7.slice(2))
console.log(str7.slice(-2))
console.log(str7.slice(-2,-1))
console.log(str7.slice(3,1))
console.log(str7.slice(-2,-4))


// ! 13. substring()

// it is used to extract one string from another string.
// it takes two parameters(startIndex, endIndex)
// it does not include the end index value.
// it will not take negative value. 


console.log(str7.substring(0,4))
console.log(str7.substring(2))
console.log(str7.substring(-2))
console.log(str7.substring(3,1))