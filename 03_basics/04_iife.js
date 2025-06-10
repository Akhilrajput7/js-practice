// immediately Invoked function expression (IIFE)

(function chai(){ // named iffe
    console.log("Chai is ready");
    
})();
 
// first () is used for defination in IFFE and second () is used for function execution

((name) => { // unnamed iffe
    console.log(`"Db connected " ${name}`);
    
})("akhil");