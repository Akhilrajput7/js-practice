const coding = ['js' , 'rubby' , 'cpp' , 'python' , 'java']

// coding.forEach( function (item){
//   console.log(item);
  
// })

// coding.forEach( (val)=> {
//   console.log(val);
  
// })

// function printMe(item){
//     console.log(item);
    
// }

// coding.forEach(printMe);

// coding.forEach( (item,index , arr)=> {
//    console.log(index , item  ,arr);
   
// })

const mycoding = [
    {
        languageName: "javascript",
        languageFileName: "Js"
    },
     {
        languageName: "java",
        languageFileName: "Jav"
    },
     {
        languageName: "python",
        languageFileName: "py"
    },
]

mycoding.forEach((item) =>{
   console.log(item.languageFileName);
   
 })