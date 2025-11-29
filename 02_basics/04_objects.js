// const tinderuser = new Object();
const tinderUser = {}

tinderUser.id = "12"
tinderUser.name = "keval"
tinderUser.isLoggedIn = false


// console.log(tinderUser);

// console.log(tinderuser);




const regularUser ={
    fullname: {
        FirstName : "Keval",
        LastName : "Jadhav",
    },
    Email: "Keval@gmail.com",
    Password:"************",
}
    
// console.log(regularUser.fullname.LastName);


const ob1={1: "A" ,2: "B"};
const ob2={3: "A" ,4: "B"};

// // const ob3 = {ob1, ob2};
// const ob3 = Object.assign({},ob1,ob2)

// const ob3 = {...ob1,...ob2}


// console.log(ob3);


const user = [
    {
        id : "01",
        Fname : "Keval",
        Lname : "Jadhav"
    },
    {
        id : "01",
        Fname : "Keval",
        Lname : "Jadhav"
    },
    {
        id : "01",
        Fname : "Keval",
        Lname : "Jadhav"
    },
]

// console.log(user);

const userOP = {...user}
// console.log(userOP);

user[1].id

// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));





const jake = {}

jake.id="01"
jake.FirstName = "Keval"
jake.LastName = "Jadhav"
jake.Email = "keval@gmail.com"

// console.log(jake);

// console.log(Object.keys(jake));
// console.log(Object.values(jake));
// console.log(Object.entries(jake));

// console.log(jake.has);


const  course = {
     coursename:"js hindi",
     courseprice:99,
     courseduration:"4  Days , 5 hourse"
}   

const {courseduration } = course  
const {courseduration :duration} = course  
console.log(duration);

