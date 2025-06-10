const user = {
    userName: "akhil",
    price:229,

    welcomeMessage: function(){
        console.log(`${this.userName} , welcome to  website`);    
        console.log(this);
        
    }
}

// user.welcomeMessage()
// user.userName = "sam"
// user.welcomeMessage()

// console.log(this);

// function one()  {
//     let userName = "akhil"
//     console.log(this.userName);   
// }

// one();

// const one = () => {
//  let userName = "akhil"
//  console.log(this.userName);
 
// }

// one();


const addTwo = (num1 , num2) =>{
    return num1 + num2
}

// console.log(addTwo(3,4));


// implicit return
// const addThree = (num1 , num2) => (num1 + num2)
const createObject = () => ({userName:"akhil"})
console.log(createObject());





