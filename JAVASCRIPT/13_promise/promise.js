

// promise in one javacript object, it is used to handle the asynchronized operation.

// by using new keyword we can create promise.

// promise takes one callback function, inside the callback function it can take two parameters [ resolve and reject ]

// for handling the resolve we need  .then() block and for handling the reject we need .catch() block. 

// promise having 3 states. [ pending , fulfilled , rejected ]

// .finally() block will execute everytime.


let p = new Promise((resolve , reject)=>{

     let task = false 

     if(task)
     {
        resolve("we will do the task 🥳 ")
     }
     else{
        reject("we will not do the task 😝")
     }
})


p
.then((data)=>{
  console.log(data)
})
.catch((err)=>{
    console.log(err)
})
.finally(
    console.log("I have made a promise")
)




