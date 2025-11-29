// singleton

// Object literals
const mysym = Symbol("key1");

const JsUser = {
    name: "Keval",
    age: 20,
    [mysym]: "God WILL TAKE REVENG",
    mySymbol: "key1",
    location: "jaipur",
    email: false,
    isLoggedIn: false,
    LastLoginDays: ["monday", "Saturday"]
};

// Updating email
JsUser.email = "kevaljadhavdenger@gmail.com";

// UPDATE again (this will work because freeze is commented)
JsUser.email = "keval@gmail.com";

console.log(JsUser);

// Adding a function to the object
JsUser.greeting = function () {
    console.log("Hello Everyone");
};

JsUser.greeting = function () {
    console.log(`Hello Everyone,${this.age}`);
};

// calling the function
console.log(JsUser.greeting());
