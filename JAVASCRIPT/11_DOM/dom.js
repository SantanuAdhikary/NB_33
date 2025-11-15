
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





let para = document.getElementsByClassName("para")


para[0].style.fontSize = "30px"
console.log(para[0])