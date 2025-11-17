
// ! how to target element 


// target element by the id

let logo = document.getElementById("logo")

console.log(logo)

// target by the tagname 

let lists =  document.getElementsByTagName("li")

console.log(lists)

console.log(lists[2])


let button = document.getElementsByTagName("button")

console.log(button)
console.log(button[0])

button[0].style.backgroundColor = "blue"


// targetting element by the classname 

  let cards =  document.getElementsByClassName("card")

  console.log(cards)

  console.log(cards[2])

  cards[2].style.backgroundColor = "pink"



  


// !  how to apply css 

logo.style.color = "orange"
logo.style.letterSpacing = "1.5px"
logo.style.fontStyle = "italic"


let about = document.getElementById("about")

console.log(about)

about.style.color = "red"
about.style.textDecoration = "underline"





// let para = document.getElementsByClassName("para")


// para[0].style.fontSize = "30px"
// console.log(para[0])




// !  how to write 


let boxes = document.getElementsByClassName("card")

console.log(boxes[3])

boxes[3].innerText = "I am from js file"

boxes[0].innerText = "hello"
boxes[0].innerText = "hi"

boxes[0].innerHTML = ` <a href=''> submit</a> `


boxes[3].innerHTML = `<h2> I am card4 from js</h2> <button> submit</button> <p> thisi is para</p>`




console.log(boxes[1].innerText)
console.log(boxes[1].innerHTML)






//  querySelector()


 let nav = document.querySelector("nav")

 console.log(nav)


 let mylogo = document.querySelector("#logo")

 console.log(mylogo)


 let btn = document.querySelector(".btn")

 console.log(btn)

 
 let c = document.querySelector(".card")
 
 console.log(c)
 
 
 
 //  !  how to apply classname


 let article = document.querySelector("article")

 console.log(article)

 article.classList.add("dark")

 article.classList.add("hello")

 article.classList.remove("hello")
 
 
 
 
 
 //  !  how to create any element 
 
 
    let div =   document.createElement("div")
 
    div.classList.add("circle")
 
    div.innerHTML = `<h2> i am circle</h2>`


    // article.append(div)


    let main = document.querySelector("main")

    console.log(main)

    main.append(div)
    main.prepend(div)
    main.before(div)
    main.after(div)


    let hello = document.createElement("button")

    hello.innerText = "hello"


    let card1 = document.querySelector(".card") 

  console.log(card1)

  card1.append(hello)