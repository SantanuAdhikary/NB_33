

let user = localStorage.getItem("signupName")

console.log(user)

let h2 = document.createElement("h2")
h2.innerText = user

let right = document.querySelector(".right")
right.prepend(h2)



let getData = async ()=>{
    try{
        
        let res =  await fetch("https://api.github.com/users")
        let data = await res.json()
        // console.log(data)
        diplayUser(data)      
    }
    catch(err)
    {
        console.log(err)
    }
}

getData()


let diplayUser =(data)=>{

    // console.log("i am display function")
    // console.log(data)

    let main = document.querySelector("main")

    data.map((ele)=>{
        // console.log(ele)

        let div = document.createElement("div")
        div.classList.add("card")

        div.innerHTML = ` <img src= ${ele.avatar_url} > <h2> ${ele.login} </h2>`

        main.append(div)
    })
}   


let logout = document.querySelector("button")

logout.addEventListener("click",()=>{

    open('./signup.html')
})