

let appendData =(data)=>{

    let input = document.querySelector("input")

    input.value += data
}


let clearData =()=>{
    let input = document.querySelector("input")

    input.value = ""
}

let calculate =()=>{

    let value = document.querySelector("input").value ; 
    let output = eval(value)
    
    document.querySelector("input").value = output
}


let removeChar =()=>{
    let value = document.querySelector("input").value ; 
    
    let updatedValue = value.slice(0,-1)
    
    document.querySelector("input").value = updatedValue
}