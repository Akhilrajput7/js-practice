
// functions

function sayMyName(){
    console.log("Akhil Rajput")
}

// sayMyName();

function addTwoNumbers(num1 ,num2){
      console.log(num1 + num2);
    
}

//  const result = addTwoNumbers(3,4)

//  console.log("result :" , result);


//  function  addTwoNumbers(num1 ,num2){
//     const result = num1 + num2
//     return result ;
//  }

// console.log(addTwoNumbers(2,3));

// function logInMessage(userName){
//     if(userName === undefined){
//        console.log("please enter user name");
//        return
//     }
    
//       return `${userName} just loggedIn`
   
    
// }

// console.log(logInMessage("akhil"));
// console.log(logInMessage());


function calculateCartPrice(val1 ,val2 ,...num1){ // rest operator
  return num1
}


// console.log( calculateCartPrice(200 ,400 ,400 ,5300,3030));


const user  = {
   name:"Akhil",
   prices:199
}

function handleObject(anyobject) {
   console.log(`username is ${anyobject.name} and price is ${anyobject.price}`);
   
}

// handleObject(user);
handleObject({
   name:"car",
   price:66
})

const myNewArray = [ 200, 550 ,749]

function returnSecondValue (getArray){
  return getArray[2]
}

// console.log(returnSecondValue(myNewArray));

