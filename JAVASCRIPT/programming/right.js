

let arr = [5,8,7,9]

let n = arr.length-1

let copy = arr[n]

for(let i=n-1 ; i>=0 ; i--)
{
   arr[i+1]  = arr[i]
}

arr[0] = copy

console.log(arr)




let arr = [10,20,30,40,50]


arr.map((ele, index , array)=>{

    console.log(ele, index , array)
})


let arr2 = ["html","css","js"]

let subjects =  arr2.map((ele)=>{
  
     return ele.toUpperCase()
})

console.log(subjects)


let mul = arr.map((ele)=>{

    return ele * 5
})

console.log(mul)

console.log(arr)