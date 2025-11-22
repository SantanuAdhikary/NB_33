

// step 1 :  target the form and add the submit event 

// step 2 : stop refresh   eventobject.preventDefault()

// step3 : target the inputs and take the data 
     

let form = document.querySelector("form")

console.log(form)


form.addEventListener("submit",(e)=>{

    e.preventDefault()  

   let sname = document.getElementById("sname").value; 
   
   let spass = document.getElementById("spass").value ; 

   console.log(sname , spass);

    console.log("submittedddd....")
})



let select = document.querySelector("select")


console.log(select)


select.addEventListener("change",(e)=>{

    console.log(e.target.value)

    let outer = document.querySelector(".outer")

    outer.style.backgroundColor = e.target.value 

    console.log("changed")
})





















let ol = document.querySelector("ol")
subject.map((ele)=>{

    let li = document.createElement("li")
    li.innerText = ele 

    ol.append(li);
})