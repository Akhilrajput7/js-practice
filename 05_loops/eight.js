// const myNums = [1,2,3]

// const initialValue = 0

//  const myTotal = myNums.reduce(( acc , currval)=> {
//     console.log(`Acc: ${acc}  , CurrVal: ${currval}`);
    
//  return acc + currval
//  } , 0)

//  console.log(myTotal);


 const shoppingCart = [ 
    {
        itemName: "js course",
        price:4500
    },
    {
        itemName: "py course",
        price:3500
    },
    {
        itemName: "Mobile Dev course",
        price:8500
    },
    {
        itemName: "Data science course",
        price:12000
    },
 ]
 

const priceToPay = shoppingCart.reduce( (acc , item) => {
    return acc + item.price
},0)

console.log(priceToPay);
