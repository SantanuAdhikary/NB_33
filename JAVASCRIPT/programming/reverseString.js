
// let reverse =(str)=>{

//     let rev = ""
//     for(let i= str.length-1; i>=0;i--)
//     {
//         rev = rev + str.charAt(i)
//     }

//     console.log(rev)

// }

let reverse =(str)=>{

    console.log("before", str)

    let i =0 , j = str.length - 1 ;

   while(i <= j)
   {
     let t = str[i];
     str[i] = str[j];
     str[j] = t; 
     i++;
     j--;
   }
   console.log("after" , str)
}

reverse("hello")