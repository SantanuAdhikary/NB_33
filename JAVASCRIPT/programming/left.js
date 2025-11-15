
let arr = [5,8,7,9]

let copy = arr[0]

for(let i=1;i<arr.length;i++)
{
    arr[i-1] = arr[i]
}


arr[arr.length-1] = copy

console.log(arr)