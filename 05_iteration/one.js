// for loop


// let i;
// let array = [10,20,30,40];
// for(array=0;array<=10;array++){
//  console.log(array);
 
// }

for (let i = 0; i < 10; i++) {
    const element = i;
    if(element > 5){
        // console.log("this is number 5 to be continue......");
        
    }
    // console.log(element);
    
}


for (let i = 1; i <= 10; i++) {
    // console.log(`outer loop ${i}`);
    
    for (let j = 1; j <= 10; j++) {
        // console.log(`inner loop ${j} and outer loop is ${i}`);
        // console.log(i + ' * ' + j + " = " + i*j);
        
        
        
    }
}



let myArray = ["iron man " ,"batman" , "superman"]
console.log(myArray.length);

for (let index = 0; index < myArray.length; index++) {
    console.log(`Value is  i for `);
    
}


// break and continue

for (let index = 0; index <= 20; index++) {
    if (index == 5 ) {
        console.log(`we found 5 `);
        break;
    }
 console.log(`Value of i is ${index}`);
     
}


for (let index = 0; index <= 20; index++) {
    if (index == 5 ) {
        console.log(`we found 5 `);
        continue;
    }
 console.log(`Value of i is ${index}`);
     
}