

 let now =  new Date();

 console.log(now)

 console.log("hour is : " , now.getHours())
 console.log("minute is : ", now.getMinutes())
 console.log("second is : ", now.getSeconds())
 console.log("milisecond is : ", now.getMilliseconds())
 console.log("year is : ", now.getFullYear())



 console.log("month is : ", now.getMonth())


 const months = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

let monthindex = now.getMonth()  // 10 

console.log(months[monthindex])


 console.log("today date is : " ,now.getDate())


 console.log(now.getDay())   // 3 

 const days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

 console.log("today is : ", days[now.getDay()])


 console.log(now.toLocaleDateString())
 console.log(now.toLocaleTimeString())




 let displayTime=()=>{

     let d = new Date();

     let time = d.toLocaleTimeString()

    //  console.log(time)

     let box = document.querySelector(".box")

    box.innerHTML = `<h1> ${time} </h1>`
 }

 displayTime()

 setInterval(displayTime,1000)


//  !  Math Object 


console.log(Math.max(20,30,50));
console.log(Math.min(20,30,50));

console.log(Math.sqrt(16));
console.log(Math.sqrt(64));

console.log(Math.floor(5.9999999999999999)) 
console.log(Math.floor(5.1)) 

console.log(Math.ceil(5.9999999999999999)) 
console.log(Math.ceil(5.000001)) 


console.log(Math.round(5.7)) 
console.log(Math.round(5.3)) 



console.log(Math.random())