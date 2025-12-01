



let form = document.querySelector("form")

form.addEventListener("submit",(e)=>{

    e.preventDefault()

    let useremail = document.getElementById("useremail").value
    let username = document.getElementById("username").value
    let userpass = document.getElementById("userpass").value

    console.log(useremail, username , userpass)

    localStorage.setItem("signupEmail",useremail )
    localStorage.setItem("signupName",username)
    localStorage.setItem("signupPass",userpass)

    alert("signup done successfully")

    open("./login.html")
})




// localStorage.setItem(key , value )
// localStorage.getItem("key")
// localStorage.removeItem("key")
// localStorage.clear()

