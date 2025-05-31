const name = "akhil"

const lastname = "Rajput"

console.log(name +" " + lastname);

console.log(`Hello my name is ${name } ${ lastname }  `);


const gameName = new String ("akhil- rajput")

console.log(gameName[0]);
console.log(gameName.__proto__);


console.log(gameName.length);
console.log(gameName.toUpperCase());

console.log(gameName.charAt(3));
console.log(gameName.indexOf("h"));


const newString = gameName.substring(0 , 4)

console.log(newString);

const anotherString  = gameName.slice(0 , -4 )

console.log(anotherString);

const stg1 = " Akhil  "

console.log(stg1);
console.log(stg1.trim());

const url  = "https://akhil.com/akhil%20rajput"

console.log(url.replace("%20" ,"_"))

console.log(url.includes("smart"))

console.log(gameName.split('-'));




