
// functions

function sayMyName(){
    console.log("Akhil Rajput")
}

// sayMyName();

function addTwoNumbers(num1 ,num2){
      console.log(num1 + num2);
    
}

 const result = addTwoNumbers(3,4)

//  console.log("result :" , result);


 function  addTwoNumbers(num1 ,num2){
    const result = num1 + num2
    return result ;
 }

// console.log(addTwoNumbers(2,3));

function logInMessage(userName){
    if(userName === undefined){
       console.log("please enter user name");
       return
    }
    
      return `${userName} just loggedIn`
   
    
}

// console.log(logInMessage("akhil"));
console.log(logInMessage());





 

