let mydate = new Date()

// console.log(mydate.toString());
// console.log(mydate.toDateString())
// console.log(mydate.toJSON());
// console.log(mydate.toLocaleString());

// let myCreateddate  = new Date(2023 ,0 ,23)
// let myCreateddate = new Date(2003,8,19,5,3)
let myCreateddate = new Date("2003-09-19")
// console.log(myCreateddate.toDateString());

let mytimeStamp = Date.now()
// console.log(mytimeStamp);
// console.log(myCreateddate.getTime());
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date();
console.log(newDate.getDay());

newDate.toLocaleString('default' , {
    weekday: "narrow",
    
})







