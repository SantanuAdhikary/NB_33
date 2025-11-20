

let display =()=>{

    alert("welcome to javascript event");
}


let hide =()=>{

    let h2 = document.querySelector("h2")

    h2.style.display = "none"
    
    // console.log(h2)
    // console.log("hideeeee")
}


let show =()=>{
    let h2 = document.querySelector("h2")
    
    h2.style.display = "block"

}


let count = 0


let increase =()=>{

    count = count + 1

    let num = document.getElementById("num")

    num.innerText = count

    console.log(count)
}

let decrease =()=>{
    count = count - 1
    
    let num = document.getElementById("num")
    
    num.innerText = count
    
    console.log(count)

}



let addRed =()=>{

  document.body.style.backgroundColor= "red";
}

let addWhite =()=>{

  document.body.style.backgroundColor= "white";
}

let addGreen =()=>{

  document.body.style.backgroundColor= "green";
}
let addBlack =()=>{

  document.body.style.backgroundColor= "#212121";
  document.body.style.color = "white";
}



let changeColor =()=>{

  let box1 = document.querySelector(".box1")

  // console.log(box1)

  box1.style.backgroundColor = "red"
}

let changeColor2 =()=>{
  let box1 = document.querySelector(".box1")
  
  // console.log(box1)
  
  box1.style.backgroundColor = "green"

}




let btn2 = document.querySelector(".btn2")

console.log(btn2)


btn2.addEventListener("click", ()=>{

   alert("I am addeventlistener")
})


let box2 = document.querySelector(".box2")

box2.addEventListener("mouseover",()=>{

  box2.style.backgroundColor = "yellow"
})
box2.addEventListener("mouseleave",()=>{

  box2.style.backgroundColor = "black"
})




let f1 = ()=>{
  console.log("i am f1")
}
let f2 = ()=>{
  console.log("i am f2")
}


let btn3 = document.querySelector(".btn3")

btn3.addEventListener("click",()=>{
  console.log("f1")
})
btn3.addEventListener("click",()=>{
  console.log("f2")
})


let box3 = document.querySelector(".box3")

let value = 0 ; 

box3.addEventListener("mousemove",()=>{

  value++; 
  let c = document.querySelector("#c")
  c.innerText = value;
  
})

box3.addEventListener("mouseout",()=>{

  value = 0
  let c = document.querySelector("#c")
  c.innerText = value;
})



let btn4 = document.querySelector('.btn4')

btn4.addEventListener("click",(e)=>{


  console.log(e)
  console.log(e.type)
  console.log(e.target)
  console.log(e.target.innerText)

  console.log("button 4 ")
})



// ! keyboard event 


let input = document.querySelector("input")

input.addEventListener("keypress",()=>{
  console.log("key is pressed")
})

input.addEventListener("keyup",(e)=>{
  console.log(e.target.value)

  let output = document.querySelector(".output")

  output.innerHTML = ` <h2> ${e.target.value} </h2> `
  console.log("key is up")
})


