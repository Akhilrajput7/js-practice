// if
 
// const isuserLoggedIn = true;

// if(isuserLoggedIn){
//    console.log("user logged in");
   
// }
// < , > , <= , >= , == , === , != ,  

// if(2 === "2"){
//     console.log('executed');
    
// }

// if( 3 != 5){
//     console.log("exectuted two");
    
// }

// const temp = 41

// if (temp === 40) {
//     console.log("temp is less than 50");
    
// }
// else{
//     console.log("temp is greater than 50");
    
// }

const score  = 200

// if(score > 100){
//    const power = "fly"
//    console.log(`User power  ${power}`);
// }

// if (score>100) console.log("True");

const balance = 1000

// if(balance > 500) console.log("balance is greter than 500"); // implicit scope

// nested if else
// if(balance < 500){
//      console.log("less than");    
// } else if(balance < 750){
//     console.log("less than 750");
    
// }
// else if (balance < 900) {
//     console.log("less than 900");
    
// }
// else{
//     console.log("less than 1200");
    
// }

 
    const userLoggedIn  = true 
    const debitCard = true
    const loggedInFromGoogle = false
    const loggedInFromEmail = true
    const guestUser = true

    if (userLoggedIn && debitCard) {
        console.log("Allow to buy course");
        
    }

    if (loggedInFromEmail || loggedInFromGoogle || guestUser) {
        console.log("user logged in");
        
    }