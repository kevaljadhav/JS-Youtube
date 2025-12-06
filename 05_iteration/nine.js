const myNumber = [1,2,3]

// const myTotal = myNumber.reduce(function (acc ,currval) {
//     console.log(`acc : ${acc} and currval : ${currval}`);
    
//     return acc + currval
// },0) 


// const num = myNumber.reduce((acc ,brev) => acc+ brev ,0)
// console.log(num);

const shoppingCart = [
    {
        itemName : "js course",
        coursePrice : 990,
    },
    {
        itemName : "java course",
        coursePrice : 233,
    },
    {
        itemName : "rube course",
        coursePrice : 480,
    }
]

const Total = shoppingCart.reduce((acc,item) => item.coursePrice + acc,0)

console.log(Total);
