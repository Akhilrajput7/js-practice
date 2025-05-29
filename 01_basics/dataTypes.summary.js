// ****** premitive datatypes They are callbyValues****

// 7 types : string  , number , boolean  , null , undefined , Symbol , bigInt 

const score = 33 
const scoreValue = 100.66
const isLoggedIn  = false
const outSideTemp = null
let userEmail = undefined;
const id  = Symbol("123")
const anotherId = Symbol("123")

console.log(anotherId === id);

const bigNumber = 34435636647737737n // js use bigInt for large number values


// *****Nonpremitive or refrence datatypes******

// Array , Objects , Functions

const heros  =["Superman" , "Ironman" , "thor"]

 let obj = {
    name:"akhil",
    age: 21 ,
}

 const myfunction = function(){
  console.log("Hello world");
  
}

console.log(typeof outSideTemp);
