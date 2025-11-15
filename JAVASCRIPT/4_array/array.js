

// ! how to declare array 

let arr = [30, "html", true, undefined]

console.log(arr)

// ! how to know the length of the array 

console.log(arr.length)

// !  methods 


// !  1. push()

// this method is used to add any element at the end of the array.
// it will return the length of the modified array.

let numbers = [10,20,30]

numbers.push(40)

console.log(numbers)


// !  2. pop()

// it is used to remove the last element from the array.
// it will return the removed element. 

let tokens = ['keywords','identifier','separators','operators','literals']

tokens.pop()

console.log(tokens)


// ! 3. unshift()

// this method is used to add any element at the start of the array.
// it will return the length of the modified array.

let players = ['rohit','virat','iyer']

players.unshift("gill")

console.log(players)


// ! 4. shift()

// it is used to remove the first element from the array.
// it will return the removed element. 

let cricketer = ['dipti','smriti','harmaan']

cricketer.shift()

console.log(cricketer)

// ! 5. indexof()

// it is used to know the index of the given element in the array.
// if the element is not present it will return -1  

let subjets = ['html','css','js','java','python']

console.log(subjets.indexOf('css'))  

// ! 6. concat()

// it is used to combine two or more than two arrays and it will return one new array.

let trainers = ['tabrez','pranav','nikhil','gaurav','vignesh']

console.log(subjets.concat(trainers))

// ! 7. includes()

// it will return true if the element is present in the array else it will return false.

console.log(trainers.includes("santanu"))
console.log(trainers.includes("tabrez"))

// ! 8. join()

// it is used to convert any array into string.

let characters = ['h','e','l','l','o']

console.log(characters.join(""))