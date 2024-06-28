//  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

// const bigNumber = 3456543576654356754n



// Reference type (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "hitesh",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}

myFunction();   //calling function
console.log(typeof anotherId);

// https://262.ecma-international.org/5.1/#sec-11.4.3


//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Stack (Primitive)     ,   Heap(Non-Primitive)
//here you get copy          //hear you get original values refrence

let myYoutube = 'ridhamkansaradotcom'     //stack 

let anotherName = myYoutube;

anotherName = 'changed_value_name';

console.log(anotherName);
console.log(myYoutube);


let userOne = {                           //Heap
    email:'ridhamkansara@gmail.com',
    upi: 'ridham@okicici',
};

let userTwo = userOne;

// userTwo.email = 'kansararidham3130@gmail.com';

// console.log(userTwo.email);
console.log(userOne.email);