
let products = []

let getData = async ()=>{
    try{
         let res =  await fetch("https://fakestoreapi.com/products")
         let data = await res.json();
        //  console.log(data)

        products = data;

        display(data);

    }
    catch(err)
    {
        console.log(err)
    }
}

getData()


let main = document.querySelector("main")


let display =(data)=>{

    // console.log(data)

    if(data)
    {

        main.innerText = ""
        data.map((ele)=>{
            // console.log(ele.title)
    
            let li = document.createElement("li")
            li.innerText = ele.title;
            main.append(li)
        })
    }


}

display()


let search = document.querySelector("input")

search.addEventListener("input",(e)=>{

    let inputvalue = e.target.value.toLowerCase()
    
    console.log(inputvalue)

    // console.log(products)

  let filteredData =  products.filter((ele)=>{
        return ele.title.toLowerCase().includes(inputvalue);
    })

    // console.log(filteredData)

    display(filteredData)
})