

let student = {
    sname : "rahul",
    rollno : 20,
    isPlayer:true,
    skills:['html','js','css'],
    address: {
        city:"chennai",
        pincode : 786543
    },
    work :  ()=>{
           console.log("eat sleep repeat")
    }
}

console.log(student.rollno)

student.work()

console.log(student.skills[1])

console.log(student.address.pincode)


console.log(Object.keys(student))

console.log(Object.values(student))

console.log(Object.entries(student))


Object.seal(student)

student.phNo = 8765432123
student.rollno = 21
delete student.sname

console.log(student)

console.log(Object.isSealed(student))


let employee ={
    ename : "virat"
}

let player ={
    salary : 10000000
}

let combinedObject = Object.assign({},student,employee, player)

console.log(combinedObject)


console.log(employee.hasOwnProperty("ename"))
console.log(employee.hasOwnProperty("salary"))