// singleton
// Object.create() // constructor method

// object literals
 
const sym1 =  Symbol("key1")

const jsUser = {
    name:"Akhil",
    "full name":"Akhil rajput",
    [sym1]:"mykey",
    age:21,
    location:"delhi",
    email:"rajputakhil393@gmail.com",
    isLoggendIn:false,
    lastLogInDays:["monday" , "Wednesday"]
}

// console.log(jsUser.email);
// console.log(jsUser['email']);
// console.log(jsUser["full name"]);
// console.log(jsUser[sym1]);

jsUser.email = "akhil@gmail.com" // change email in jsUser
// Object.freeze(jsUser); // if u use freeze method then you have no access to change in object
// console.log(jsUser);

jsUser.greeting = function (){
    console.log("hello js user");
    
}

jsUser.greetingTwo = function(){
    console.log(`Hello js user, ${this.name}`);
    
}


jsUser.greeting();
// console.log(jsUser.greeting);
console.log(jsUser.greetingTwo());
console.log(jsUser);






