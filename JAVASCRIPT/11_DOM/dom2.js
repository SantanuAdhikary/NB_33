

let topic = document.getElementById("topic")

console.log(topic)


let headings = document.getElementsByTagName("h1")

console.log(headings)

console.log(headings[1])


let button =document.getElementsByTagName("button")

console.log(button)
console.log(button[0])


let b2 = document.getElementById("b2")

console.log(b2)


let boxes = document.getElementsByClassName("box")

console.log(boxes)

console.log(boxes[2])



let btn = document.getElementsByClassName("btn")

console.log(btn)
console.log(btn[0])


let h1 = document.querySelector("#topic")

console.log(h1)

let heading1 = document.querySelector("h1")

console.log(heading1)

let box = document.querySelector(".box")

console.log(box)


let cards = document.querySelectorAll(".box")

console.log(cards)

let buttons = document.querySelectorAll("button")

console.log(buttons)





// ! apply css 

box.style.backgroundColor = "pink"

buttons[0].style.backgroundColor = "green"


// ! adding class 

buttons[0].classList.add("login")

console.log(buttons[0].classList)

buttons[0].classList.remove("login")



// ! how to write 


console.log(boxes[1])

boxes[1].innerText = "<h2>javascript</h2> "
boxes[1].innerHTML = "<h2>javascript</h2> "

console.log(boxes[2].innerText)
console.log(boxes[2].innerHTML)


// ! HOW TO CREATE ELEMENT 

let paragraph = document.createElement("p")

paragraph.innerText = "i am paragraph from js"

let landmark = boxes[2]

console.log(landmark)

landmark.append(paragraph)
landmark.prepend(paragraph)
landmark.before(paragraph)
landmark.after(paragraph)


let article = document.querySelector("article")

console.log(article)




article.innerHTML = ` <img src= "https://images.pexels.com/photos/1766828/pexels-photo-1766828.jpeg?cs=srgb&dl=pexels-baskincreativeco-1766828.jpg&fm=jpg" > `