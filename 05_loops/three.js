//  for of

["" ,"" ,""]
[{} , {} , {}]


const arr = [1,2,3,4,5,]

for (const num of arr) {
    console.log(num);
    
}

const greetings = "Hello world"

for (const string of greetings) {
    console.log(string);
    
}

Maps

const map = new Map()
map.set('IN' , "india")
map.set('USA' , "united states of america")
console.log(map);

for (const [key , value] of map) {
    console.log(key , value);
    
}

const myobj = {
    game1: "BGMI",
    game2: "COD"
}


for( const [key , value] of myobj){
    console.log(`${key} :- ${value}`);  

