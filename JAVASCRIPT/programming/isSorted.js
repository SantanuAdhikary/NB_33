



let arr = [3,4,5,6,9,10]

let flag = true 

for(let i=1 ; i<arr.length ; i++)
{
    if(arr[i] < arr[i-1])
    {
        flag = false;
        break;
    }
}
if(flag == true)
{
    console.log("it is sorted array")
}
else{
    console.log("It is not sorted array")
}