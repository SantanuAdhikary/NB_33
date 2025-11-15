let reverse =(num)=>{

    let rev = 0 
    while(num > 0)
    {
        let d = num % 10 ;
        console.log(d)
        rev = rev * 10 + d
        num = Math.floor( num / 10)
        
    }

    console.log(rev)
}

reverse(123)