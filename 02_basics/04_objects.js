// const tinderUser = new Object()
const tinderUser = {}

 tinderUser.id = "123Abc"
 tinderUser.name = "akhil"
 tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser  = {
    email:"example@gmail.com",
    fullName:{
        userFullName:{
            firstName:"akhil",
            lastname:"rajput"
        }
    }
}
// console.log(regularUser.fullName.userFullName.firstName);

const obj ={
    1:'a',
    2:"b"
}

const obj2  = {
    3:"c",
    4:"d"
}

// const obj3 = {obj , obj2}
//  const obj3 = Object.assign({} ,obj,obj2)
const obj3 = {...obj ,...obj2}
// console.log(obj3);

const users = [
    {
        id:1,
        email:"g@gmail.com"
    },
    {
        id:2,
        email:"@gmail.com"
    }
]

users[1].email
console.log(tinderUser)

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty("isLogged"));






