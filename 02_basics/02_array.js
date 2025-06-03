const marvelHeros = ["thor" , "ironman" , "Hulk"]

const DcHeros = ["superman" , "flash" , "batman"]

// marvelHeros.push(DcHeros)
// const allHeros = marvelHeros.concat(DcHeros)

// console.log(allHeros);

const allNewHeros = [...marvelHeros ,...DcHeros] //spread operator
// console.log(allNewHeros);

const another_array = [1,2,3 ,[4,5,6] ,7 ,[6,7,[4,5]]]

const usableArray = another_array.flat(Infinity)

// console.log(usableArray);


// console.log(Array.isArray("akhil"));
// console.log(Array.from("akhil"));
console.log(Array.from({name:"akhil"})); 

let score1 = 100
let score2 =200
let score3 = 300

console.log(Array.of(score1,score2,score3));



