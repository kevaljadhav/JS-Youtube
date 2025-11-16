const marvelHeros = ["Thor","iron","Sprider"]
const Dc_heros = ["Super","Bat","Equa"]

marvelHeros.push(Dc_heros);

// console.log(marvelHeros);



// console.log(marvelHeros);
// console.log(marvelHeros[2]);

// const newArray2 = marvelHeros.concat(Dc_heros);
// console.log(newArray2); 


const all_heros = [...marvelHeros ,...Dc_heros];

// console.log(all_heros);

const anotherArry = [1,2,3,[4,5,6],7,[6,7,[4,5]] ]
const Another_Big_Array = anotherArry.flat(Infinity)

// console.log(Another_Big_Array);



// console.log(Array.isArray("keval")) //check is it array or not ?
// console.log(Array.from("keval jadhav")) //convert given value into array
// console.log(Array.from({name : "keval"})) //sometime interview quwtion

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3));


console.log(Array.isArray([1,2,3]));

console.log(...String(1234567891234231)); //Spread string Method to convert Number into Array but describe the value
console.log(Array.from(String(1234567891234231)));


















