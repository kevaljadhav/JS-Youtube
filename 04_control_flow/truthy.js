const userEmail = ""

// if(userEmail){
//     console.log("We have user email");
// }else{
//     console.log("we dont have user email");
// }

//falsy values

// false , 0 , -0 , BigInt 0n,NaN,"",null,undefined


//truthy values 

//"0" , 'false' , " " , [ ] , { } ,function(){}

// if (userEmail.length === 0) {
//     console.log("Arry is empty");
    
// }

const emptyObject = {}
if (Object.keys(emptyObject).length === 0){
    // console.log(" Object is empty");
    
}



//Nullish Coalescing Operator (??) : null undefined

let val1;


// val1 = 5 ?? 10
// val1 = null ?? 30
// val1 = undefined ?? 23   
val1 = undefined ?? 29 ??32



// console.log(val1);


// terniary operator    

// condition ? true : false 

const iceTeaPrice = 100 

iceTeaPrice <=80 ? console.log(" Less than 80 rs "):console.log("more than 80 rs ");


