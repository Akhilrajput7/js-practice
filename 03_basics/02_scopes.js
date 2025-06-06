
// scopes

// var c = 300

let a =200 ;

if (true) {
let a = 10
const b =20
// console.log("inner" , a);


}


// console.log(a);
// console.log(b);
// console.log(c);

// nested scope

function one(){
    const userName = 'akhil'

    function two(){
        const website = 'youtube.com'
        console.log(userName);       
    }
    // console.log(website);
    
    two();
}

// one();

if (true) {
    const userName = 'akhil'
    if (userName==="akhil") {
        const website = " youtube"
        // console.log(userName + website);       
    }
    // console.log(website);
    
}

// console.log(userName);

// ************* interesting concept

console.log(addone(5));
function addone(num) {
    return num + 1
}

// console.log(addTwo(5));

const addTwo = function(num){
    return num + 2
}




