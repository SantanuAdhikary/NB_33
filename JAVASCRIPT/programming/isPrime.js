

let isPrime =(num)=>{

    let count = 0
    for(let i =1 ; i<=num;i++)
    {
            if(num % i == 0)
            {
                count++
            }
    }

    if(count == 2) 
        console.log("it is  a prime")
    else
        console.log("it is not prime")

}

isPrime(9)
isPrime(7)
isPrime(17)
