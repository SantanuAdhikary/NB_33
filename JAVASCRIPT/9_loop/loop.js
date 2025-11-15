

let players = ["rohit","virat","shreyash","rahul","jadeja"];


// !   for loop 


for(let i = 0 ; i< players.length ; i++)
{
    console.log(players[i]);
}


let num = 10 

while(num<=15)
{
   console.log(num)
  num++;
}


// !   for in loop and for of loop 


// for in loop is used to traverse and it will take the index 

let subjects = ['java','python','sql','webtech','react','django']



for( let i  in subjects)
{
    console.log(i , subjects[i]);
}




for(let ele of subjects)
{
    console.log(ele)   ;
}




let ob1 = {

    name : "pen",
    price : 10,
    color: "black"
}


for(let i in ob1)
{
    console.log(i)
}



for(let i in ob1)
{
    console.log(ob1[i]);
}




//! for in 

// for in  ------> arrray        -------> index
// for in --------> object      ---------> key 

for(let i in arrayname)
{
    console.log(i , arrayname[i])
}

for(let key in objectname)
{
    console.log(key , objectname[key])
}

// !  for of loop 

for(let ele of arrayname)
{
    console.log(ele)
}


