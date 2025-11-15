

let  employee = {
    ename : "miller",
    sal : 9000,
    eid : 135,
    city : "new york",
   
}

console.log(employee.ename)
console.log("salary is ", employee.sal)

   let { sal , eid , city, ename} = employee;
   console.log(city)
   console.log(ename)
   console.log(sal)

// !  shallow copy 

   let arr1 = [10,20,30,40]

   let copy = arr1     // shallow copy 

   copy.push(50)

   arr1.shift()

   console.log(copy)  // [10,20,30,40,50]

   console.log(arr1) // [10,20,30,40]