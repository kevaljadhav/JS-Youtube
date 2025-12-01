const user = {
    username : "keval",
    price:99,

    welcomeMessage: function(){
        console.log(`${this.username} , Welcome to website `);
        console.log(this);
        
    }

}

// user.welcomeMessage()
// user.username="don"
// user.price=899
// user.welcomeMessage()

// console.log(this);


// function chai(){
//     cosnt username="keval";
//     console.log(this.username);
    
// }

// const chai = function(){
//     const username="keval";
//     console.log(this.username);
// }

const chai = () => {
    let username="keval";
    // console.log(this);
}

chai()



const addtwo=(num1,num2) => {
    return num1+num2
}

// console.log(addtwo(2,5));









const addthree = (num1,num2,num3) => {
    return num1+num2+num3
}
// console.log(addthree(20,30,40));




// const addsomething = ()


function add(vl1,vl2,vl3){
    vl3 = vl1+vl2
    // console.log(`This is the sum of two value ${vl3}  `)
}

add(2,3)



// const anotherAdd = (sum1,sum2) => {
//     return sum1+sum2
// }


// const anotherAdd = (sum1,sum2) => sum1+sum2
const anotherAdd = (sum1,sum2) => ({user:"keval"})

console.log(anotherAdd(2,4));

const myarray = [2 ,3 ,4 ,5]

console.log(myarray.forEach);

