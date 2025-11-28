

let getData = async ()=>{

    try{

        let res  = await fetch("https://fakestoreapi.com/products")
        console.log(res)
     
       let data =   await res.json()
       console.log(data)
    }
    catch(err)
    {
            console.log(err)
    }
}

getData()