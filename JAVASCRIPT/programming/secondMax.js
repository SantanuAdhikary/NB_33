

let arr = [2,5,7,9,6,9,8]

let max = -Infinity 
let smax = -Infinity

for(let i=0;i<arr.length ;i++)
{
    if(arr[i] > max)
    {
        smax = max 
        max = arr[i]
    }
    else if(arr[i] > smax && arr[i] != max)
    {
        smax = arr[i]
    }
}

console.log(smax)