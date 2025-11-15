
let arr = [10,20,30,40,50]

arr.map((ele)=>{
    console.log(ele+100000);
})


let subjects = ["html","css","js","java","python","react","sql"]

subjects.map((ele)=>{
    console.log(ele.toUpperCase())
})


console.log(subjects[0])
console.log(subjects[1])
console.log(subjects[2])

let employee = [
    { 
      ename:"miller", 
      eid:101 , 
      sal:4000
    },
      
      {
        ename : "adams",
        eid:102,
        sal:7000
      },

      {
        ename:"scott",
        eid:103,
        sal:9000
      }
      

     
]



employee.map((ele)=>{
    console.log(ele)
})

employee.map((ele)=>{
    console.log(ele.sal)
})


console.log("=================================================")


employee.map((ele)=>{

    console.log(ele.ename)
})

let arr2 = [2,6,9,8,6,8]

// [2,6,9,8]

let temp = []

for(let i=0;i<arr2.length;i++)
{
    if(!temp.includes(arr2[i]))
    {
        temp.push(arr2[i])
    }
}
console.log(temp)




Input: nums = [0,0,1,1,1,2,2,3,3,4]
Output: 5, 
nums = [0,1,2,3,4,_,_,_,_,_]