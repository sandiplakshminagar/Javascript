
console.log('hello javascript')

//how to create variables//
var j;
let y;
const b=3.7777;
//chapter-2 opertaors-
//Arthmetic
let m=10;
let n=20;
let sum=n+m;
let mul=n*n;
let div=n%m
let comp=m>n;
console.log("Sum: " + sum + "\nMul: " + mul + "\nDiv: " + div + "\nComp: " + comp);

//Assignment Operators---

let ass= 10;
/*ass += 5;  
ass-=3;
ass *=5;
ass/=2;
ass%=4;*/
ass**=2;
console.log(ass)
//comparison operator

let c1=10;
/*let c2=20;
let c3='20';
console.log("equal to :",c1==c2);
console.log("not equal to:",c1!=c2);
console.log("stict equal:",c2===c3);
console.log(" strict not equal to:",c3!==c2);
console.log("greater than:",c1<c2);
console.log("greater than equal to:",c1>=c2);*/

let num = 6;
let result = (num % 2 === 0) ? "Even" : "Odd";
console.log(result);  
// ---------------------------------------------
//BITWISE ASSIGNMENT OPERATORS
// ---------------------------------------------

console.log("=== Bitwise Assignment Operators ===");

let a = 5;  // 0101
let t= 3;  // 0011

a &= t;
console.log("a &= b:", a);  // 1 (0001)

a = 5;
a |= t;
console.log("a |= b:", a);  // 7 (0111)

a = 5;
a ^= t;
console.log("a ^= b:", a);  // 6 (0110)

a = 2;
a <<= 1;
console.log("a <<= 1:", a); // 4 (0100)

a = 8;
a >>= 1;
console.log("a >>= 1:", a); // 4 (0100)

a = -8;
a >>>= 1;
console.log("a >>>= 1:", a); // 2147483644 (unsigned right shift)

// ---------------------------------------------
// LOGICAL ASSIGNMENT OPERATORS 
// ---------------------------------------------

console.log("\n=== Logical Assignment Operators ===");

// ||=
let x = 0;
let o= 10;
x ||= o;
console.log("x ||= y:", x);  // 10

// &&=
let v = 5;
let w = 20;
v &&= w;
console.log("p &&= q:", v);  // 20

let r = 0;
r &&= 100;
console.log("r &&= 100:", r); // 0

// ??=
let p;
let q = 30;
m ??= q;
console.log("m ??= n:", p);  // 30

let z = 0;
z ??= 50;
console.log("z ??= 50:", z); // 0 (not null or undefined)


// Primitive Types
let name = "John";       // String
let age = 25;            // Number
let isAdult = true;      // Boolean
let l;                   // Undefined
let empty = null;        // Null
let id = Symbol("id");   // Symbol
let big = 123456789123456789n; // BigInt

// Non-Primitive Types
let person1= { name: "Alice", age: 30 }; // Object
let colors = ["red", "green", "blue"];   // Array
function greet() { console.log("Hello"); } // Function

console.log(typeof "hello");  // string
console.log(typeof 42);       // number
console.log(typeof null);     // object ❗(this is a known bug in JS)
console.log(typeof []);       // object
console.log(typeof function(){}); // function

//----------------------------------------------------------------------------------------------//
// ---------------------------------------------
// NON-PRIMITIVE (REFERENCE) DATA TYPES
// ---------------------------------------------

console.log("=== Object ===");
let person = {
  name: "Soham",
  age: 21,
  isStudent: true
};
console.log(person.name);  // Output: Soham

console.log("\n=== Array ===");
let fruits = ["apple", "banana", "mango"];
console.log(fruits[1]);    // Output: banana

console.log("\n=== Function ===");
function greet() {
  console.log("Hello from function!");
}
greet(); // Call function

// Function stored in variable
let sayHi = function() {
  console.log("Hi there!");
};
sayHi();

console.log("\n=== Date ===");
let today = new Date();
console.log(today);  // Shows current date and time

console.log("\n=== RegExp (Regular Expression) ===");
let pattern = /[0-9]/;
console.log(pattern.test("abc123")); // true

console.log("\n=== Set ===");
let mySet = new Set([1, 2, 2, 3]);
console.log(mySet); // Set { 1, 2, 3 }

console.log("\n=== Map ===");
let myMap = new Map();
myMap.set("name", "Soham");
myMap.set("age", 21);
console.log(myMap.get("name")); // Soham
console.log(myMap);             // Full map

console.log("\n=== Reference Behavior ===");
let a1= { value: 10 };
let b1 = a1;
b1.value = 99;
console.log("a.value:", a1.value);  // 99 (shared reference)
