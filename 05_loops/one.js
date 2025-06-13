//  for loop

for (let i  = 0;  i <= 10; i++) {
     const elemet = i ;
     if(elemet == 5){
        console.log("5 is best number");
        
     }
     console.log(elemet);

}

for (let i = 1; i <=10 ; i++) {
    console.log( `outer loop value: ${i}`);
    
    for (let j = 1; j < 10; j++) {
        // console.log(`inner loop value: ${j} outer loop ${i} `);
        console.log(i + "*" + j + ' =' + i*j)
        
    }
    
}

let myArray = ["batman " , "flash" , 'superman']
for( let index = 0 ; index < myArray.length; index++ ){
 const elemet = myArray[index]
  console.log(elemet);
  
} 

// break and continue

for (let index = 1; index <= 20; index++) {
     if (index == 5) {
        console.log("detected 5");
        break;
     }
    console.log(` value of i is: ${index }`);   
    
}

for (let index = 1; index <= 20; index++) {
     if (index == 5) {
        console.log("detected 5");
        continue;
     }
    console.log(` value of i is: ${index }`);   
    
}