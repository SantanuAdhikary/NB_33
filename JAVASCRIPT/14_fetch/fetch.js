
// ! step 1 :  fetch the data 
                    //   it will return promise 
// ! step 2 : handle the promise 
                  // it will return response
// ! step 3 : conver the response into json 
                // it will return promise 
// ! step 4: handle the promise 
              // it will return original data 

   let fetchdata = fetch("https://fakestoreapi.com/products")

   console.log(fetchdata) ;   // promise 

   fetchdata
   .then((data)=>{
        console.log(data)   // response 

        let jsondata = data.json()  // convert into json
        console.log(jsondata)  // promise 

        jsondata
        .then((data)=>{
                console.log(data)      // it will give the original output
        })
        .catch((err)=>{
            console.log(err)
        })
   })
   .catch((err)=>{
     console.log(err)
   })