

function dekhlo(){
    console.log("K");
    console.log("E");
    console.log("V");
    console.log("A");
    console.log("L");
    console.log("J");
    console.log("A"); 
    console.log("D");
    console.log("H");
    console.log("A");
    console.log("V");

}

// dekhlo()




function addTwoNumber(num1,num2){
    let result = num1 + num2
    return result   
    
}

const result = addTwoNumber(20,12);
// console.log(result);




function twonoadd(no1,no2){
    return no1+no2
}


const answer = twonoadd(20,23)
// console.log(answer);


function userLogginMassage(Username ="keval"){
    if(!Username){
        console.log("Please enter a user name ");
        return
    }
    return `${Username} Succefully logged in`
}

// console.log(userLogginMassage("keval j"));

function calculateCartprice(...num1){
    return num1
}

// console.log(calculateCartprice(234,345,324));


const user = {
    username:"keval",
    price:99
}

function Handleobject(anyobject){
    console.log(`User Name is ${anyobject.username},Price is ${anyobject.price}`);
    
}

Handleobject({
    username:"karan",
    price:399
})


const array = [300,233,2650]

function returnSecondValue(getarray){
    return getarray[0]
}

// console.log(returnSecondValue(array));
console.log(returnSecondValue([300,2334,23342,24234]))


const myArray = [200 , 390 ,3920 ,367];

const myObject = {
    myname : "keval jadhav",
    myage:20,
    mydegree:"MCA"
}

function myFuntion(myProfile){
    console.log(`Hiii My Name Is ${myProfile.myname} & my age is ${myProfile.myage} currenty Studing ${myProfile.mydegree}`);
    return myArray[2]
}

console.log(myFuntion(myObject))