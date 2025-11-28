


let btn = document.querySelector("button")

let input = document.querySelector("input")

let img = document.querySelector("img")

btn.addEventListener("click",()=>{

    let Upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    let lower = Upper.toLowerCase()

    let numbers = "0123456789"

    let special = "@#$&"

    let first = Upper[ Math.floor( Math.random() * Upper.length)]    
    let second = lower[ Math.floor( Math.random() * lower.length)]   
    let third = numbers[ Math.floor( Math.random() * numbers.length)]    
    let fourth = special[ Math.floor( Math.random() * special.length)]   
    
    let pass = first + second + third + fourth

    console.log(pass)

    input.value = pass;

    
})


console.log(img.type)

img.addEventListener("click",()=>{

    if(input.type == "text")
    {
        input.type = "password"
        img.src = "./eye-close.png"
    }
    else{
        input.type = "text"
        img.src = "./eye-open.png"
    }
})