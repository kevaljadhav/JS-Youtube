const myObject ={
    js :"javascript",
    cpp : "c++",
    rb:"rube",
    swift : "swift by apple"
}

for (const key in myObject) {    
    // console.log(`${key} short cut of ${myObject[key]}`);
        
    
}


const myArray = ["js", "python " , "rube " , "cpp"]

for (const key in myArray) {
    
    // console.log(Array[key]);
    
}



const map = new Map()
map.set('IN', "india")
map.set('USA', "United states of america")
map.set('FR', "France")
map.set('IN', "india")

for (const key in map) {
    console.log(key);
    
}