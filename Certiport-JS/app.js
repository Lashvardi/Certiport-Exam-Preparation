// ? 1.1 Complete and debug code that uses assignment and arithmetic
// ? operators
// ? • Assignment, increment, decrement, addition, subtraction, division,
// ? multiplication, modulus, compound assignment operators (+=, -=, *=, /=,
// ? %=)

let x = 50;
let y = 25;

// * +
console.log(`${x} + ${y} =  ${x + y}`);

// * -
console.log(`${x} - ${y} =  ${x - y}`);

// * *
console.log(`${x} * ${y} =  ${x * y}`);

// * /
console.log(`${x} / ${y} =  ${x / y}`);

// * %
console.log(`${x} % ${y} =  ${x % y}`);

console.log();

// !

// * +=
console.log(`${x} += ${y} =  ${(x += y)}`);

// * -=
console.log(`${x} -= ${y} =  ${(x -= y)}`);

// * *=
console.log(`${x} *= ${y} =  ${(x *= y)}`);

// * /=
console.log(`${x} /= ${y} =  ${(x /= y)}`);

console.log();

// !

// * ==
console.log(`${x} == ${y} = ${x == y}`);
console.log(`${x} == ${y} = ${x === y}`);

console.log();
console.log("Javascript Best Practices");

// ? Apply JavaScript best practices
// ? • Comments, indentation, naming conventions, noscript, constants, reserved
// ? keywords, debugger keyword, setting breakpoints, console.log

// * https://www.w3schools.com/js/js_conventions.asp (გავარჩიოთ!)

// ? 1.3 Evaluate the use of internal and external scripts
// ? • When to use, how to use, and what happens when scripts are used at
// ? multiple levels

// * internal-(javascript-ი HTML- ფაილში გამოიყენება როდესაც ვებსაიტი არ მოითხოვს დიდ javascript-ის
// * ფაილს ამ შემთხევაში უმჯობესია javascript-ი HTML ის ფაილშივე <script> ტეგში დავწეროთ)

// * external-(javascript-ი ცალკე ფაილში. ვიყენებთ როდესაც ჩვენი ჯავასკრიპტი მოდებულია რამოდენიმე HTML ფაილში მაგალითად სხვადასხვა page-ებზე
//* ამ შემთხვევაში უმჯობესია გამოვიყენოთ ცალკეული ფაილი შემოვიტანოთ <script src="test.js"></script>)

// * 1.4 Implement exception handling
// * try, catch, finally

console.log("Try. Catch, Finally");

try {
  console.log("(1) პირველ რიგში გაეშვება ეს");
} catch (err) {
  console.log("(2) error ის შემთხვევაში გაეშვება ეს");
} finally {
  console.log("კოდი რომელიც error ის მიუხედავათ მაინც გაეშვება");
}


// ? 1.5 Complete and debug code that interacts with the Browser Object
// ? Model (BOM)
// ? • Displaying dialogs, determining screen size


console.log("javascript BOM")


// ? აბრუნებს PX ებს
// console.log(screen.width);
// console.log(screen.height);
// console.log(screen.availWidth);
// console.log(screen.availHeight);
// console.log(screen.colorDepth);
// console.log(screen.pixelDepth);



// ? 2.1 Declare and use variables of primitive data types
// ? • Number, Boolean, String, null, undefined, type of operator, type-checking
// ? functions, use strict, converting between data types (parseInt, parseFloat),
// ? formatting numbers, string operations, eval(), toFixed(), toLocaleString(),
// ? toPrecision(), single quote vs. double quote (nesting), initialization


//* Declare variables of primitive data types
let age = 25; // number
let isStudent = true; // boolean
let name = 'John'; // string
let job = null; // null
let pet; // undefined

// * Type of operator
console.log(typeof age); // 'number'

// * Type-checking functions
console.log(Number.isInteger(age)); // true
console.log(typeof isStudent === 'boolean'); // true

// * Converting between data types
let strNum = '42';
console.log(parseInt(strNum)); // 42
console.log(parseFloat(strNum)); // 42.0

// * Formatting numbers
let price = 9.99;
console.log(price.toFixed(2)); // '9.99'
console.log(price.toLocaleString('en-US', {style: 'currency', currency: 'USD'})); // '$9.99'

// * String operations
let greeting = `Hello, my name is ${name}.`;
console.log(greeting); // 'Hello, my name is John.'
console.log('abc' + 'def'); // 'abcdef'
console.log('5' + 5); // '55'
console.log('5' - 2); // 3

// * Eval
let q = 1;
let w = 2;
console.log(eval('q + w')); // 3


// Single quote vs. double quote (nesting)
let message1 = "He said, 'Hello.'";
let message2 = 'He said, "Hello."';
let message3 = 'He said, \'Hello.\'';

// * Initialization in JavaScript
let a, b, c;
a = 1;
b = 2;
c = a + b;
console.log(c); // 3


// ? 2.2 Declare and use arrays
// ? • Single-dimensional arrays; multi-dimensional arrays; iteration; initialization;
// ? defining, sorting, and searching an array; push, pop, shift, and unshift
// ? methods; length property; accessing an array element
// ? Single-dimensional array
let fruits = ['apple', 'banana', 'orange'];
console.log(fruits[1]); // 'banana'
console.log(fruits.length); // 3

// Multi-dimensional array
let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];
console.log(matrix[1][2]); // 6

// Iteration
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

fruits.forEach(function(fruit) {
  console.log(fruit);
});

// Initialization
let numbers = new Array(3);
numbers[0] = 1;
numbers[1] = 2;
numbers[2] = 3;
console.log(numbers); // [1, 2, 3]

let animals = ['dog', 'cat', 'bird'];

// Defining, sorting, and searching an array
console.log(animals.indexOf('cat')); // 1
console.log(animals.includes('fish')); // false
animals.sort();
console.log(animals); // ['bird', 'cat', 'dog']

// Push, pop, shift, and unshift methods
animals.push('fish');
console.log(animals); // ['bird', 'cat', 'dog', 'fish']
animals.pop();
console.log(animals); // ['bird', 'cat', 'dog']
animals.unshift('turtle');
console.log(animals); // ['turtle', 'bird', 'cat', 'dog']
animals.shift();
console.log(animals); // ['bird', 'cat', 'dog']
console.log(animals.length); // 3

// Accessing an array element
console.log(animals[0]); // 'bird'
console.log(animals[1]); // 'cat'
console.log(animals[2]); // 'dog'


// ? 2.3 Complete and debug code that uses objects
// ? • Properties, methods, instantiation, Date object, retrieving date and time
// ? parts, localizing date format (MM/DD vs DD/MM), adding and subtracting
// ? dates


// Properties and methods
let person = {
  name: 'John',
  age: 25,
  sayHello: function() {
    console.log(`Hello, my name is ${this.name}.`);
  }
};
console.log(person.name); // 'John'
person.sayHello(); // 'Hello, my name is John.'

// Instantiation
function Person(name, age) {
  this.name = name;
  this.age = age;
  this.sayHello = function() {
    console.log(`Hello, my name is ${this.name}.`);
  }
}
let person1 = new Person('John', 25);
let person2 = new Person('Jane', 30);
console.log(person1.name); // 'John'
console.log(person2.age); // 30
person1.sayHello(); // 'Hello, my name is John.'

// Date object
let currentDate = new Date();
console.log(currentDate); // e.g. 'Tue Mar 29 2023 14:47:27 GMT-0700 (Pacific Daylight Time)'
console.log(currentDate.getFullYear()); // 2023
console.log(currentDate.getMonth()); // 2 (January is 0, so March is 2)
console.log(currentDate.getDate()); // 29
console.log(currentDate.getHours()); // 14
console.log(currentDate.getMinutes()); // 47
console.log(currentDate.getSeconds()); // 27

// Localizing date format
let options = {month: 'numeric', day: 'numeric', year: 'numeric'};
console.log(currentDate.toLocaleDateString('en-US', options)); // '3/29/2023'
console.log(currentDate.toLocaleDateString('en-GB', options)); // '29/03/2023'

// Adding and subtracting dates
let futureDate = new Date();
futureDate.setDate(currentDate.getDate() + 7);
console.log(futureDate.toLocaleDateString('en-US', options)); // '4/5/2023'
let pastDate = new Date();
pastDate.setDate(currentDate.getDate() - 7);
console.log(pastDate.toLocaleDateString('en-US', options)); // '3/22/2023'


// ? 2.4 Complete and debug code that uses built-in Math functions
// ? • random, round, abs, floor, ceil, min, max, pow, sqrt

let o = -3.14;
let p = 2.71;

// Math.random()
console.log(Math.random()); // generates a random number between 0 and 1

// Math.round()
console.log(Math.round(o)); // -3
console.log(Math.round(p)); // 3

// Math.abs()
console.log(Math.abs(o)); // 3.14
console.log(Math.abs(p)); // 2.71

// Math.floor()
console.log(Math.floor(o)); // -4
console.log(Math.floor(p)); // 2

// Math.ceil()
console.log(Math.ceil(o)); // -3
console.log(Math.ceil(p)); // 3

// Math.min() and Math.max()
console.log(Math.min(1, 2, 3)); // 1
console.log(Math.max(1, 2, 3)); // 3

// Math.pow() and Math.sqrt()
console.log(Math.pow(2, 3)); // 8 (2^3)
console.log(Math.sqrt(25)); // 5 (square root of 25)


// ? Complete and debug functions that accept parameters and return
// ? values
// ? • Reusable code, local vs. global scope, redefining variables, passing
// ? parameters, value vs. reference, return values


// Function that accepts parameters and returns a value
function addNumbers(a, b) {
  let sum = a + b;
  return sum;
}

let result = addNumbers(2, 3);
console.log(result); // 5

// Reusable code
function greet(name) {
  console.log(`Hello, ${name}!`);
}

greet('John'); // 'Hello, John!'
greet('Jane'); // 'Hello, Jane!'

// Local vs. global scope
let globalVar = 'global';

function testScope() {
  let localVar = 'local';
  console.log(localVar); // 'local'
  console.log(globalVar); // 'global'
}

testScope();
console.log(globalVar); // 'global'
// console.log(localVar); // ReferenceError: localVar is not defined

// Redefining variables
let x1 = 5;

function testRedefine() {
  let x1 = 10;
  console.log(x); // 10
}

testRedefine();
console.log(x1); // 5

// Passing parameters
function calculateArea(width, height) {
  let area = width * height;
  return area;
}

let area1 = calculateArea(5, 10);
let area2 = calculateArea(3, 7);
console.log(area1); // 50
console.log(area2); // 21

// Value vs. reference
let arr1 = [1, 2, 3];

function testValue(arr) {
  arr.push(4);
  console.log(arr); // [1, 2, 3, 4]
}

testValue(arr1);
console.log(arr1); // [1, 2, 3]

let obj1 = {name: 'John'};

function testReference(obj) {
  obj.name = 'Jane';
  console.log(obj); // {name: 'Jane'}
}

testReference(obj1);
console.log(obj1); // {name: 'Jane'}

// Return values
function checkEven(num) {
  if (num % 2 === 0) {
    return true;
  } else {
    return false;
  }
}

console.log(checkEven(4)); // true
console.log(checkEven(3)); // false


// ? Evaluate expressions that use logical and comparison operators
// ? • !=, <, >, <=, >=, !, ==, &&, ||

let num1 = 5;
let num2 = 10;
let num3 = 5;

// Comparison operators
console.log(num1 != num2); // true
console.log(num1 < num2); // true
console.log(num1 > num2); // false
console.log(num1 <= num3); // true
console.log(num1 >= num3); // true

// Logical operators
console.log(!(num1 == num2)); // true (num1 is not equal to num2)
console.log(num1 == num3 && num1 < num2); // true (both conditions are true)
console.log(num1 == num3 || num1 > num2); // true (at least one condition is true)


// ? Complete and debug decision statements
// ? • Single alternative (if), dual alternative (if else), multiple alternative (switch),
// ? nested if

// Single alternative (if)
let age1 = 18;

if (age1 >= 18) {
  console.log('You are eligible to vote.');
}

// Dual alternative (if else)
let temperature = 25;

if (temperature > 30) {
  console.log('It is too hot outside.');
} else {
  console.log('The temperature is just right.');
}

// Multiple alternative (switch)
let dayOfWeek = 3;

switch (dayOfWeek) {
  case 1:
    console.log('Today is Monday.');
    break;
  case 2:
    console.log('Today is Tuesday.');
    break;
  case 3:
    console.log('Today is Wednesday.');
    break;
  case 4:
    console.log('Today is Thursday.');
    break;
  case 5:
    console.log('Today is Friday.');
    break;
  default:
    console.log('Today is the weekend.');
}

// Nested if
let score = 85;

if (score >= 90) {
  console.log('You got an A!');
} else if (score >= 80) {
  console.log('You got a B.');
  if (score >= 85) {
    console.log('You are on the honor roll.');
  }
} else if (score >= 70) {
  console.log('You got a C.');
} else {
  console.log('You need to study harder.');
}


// ? Complete and debug loops
// ? • for, for in, while, do while, break, continue


// for loop
for (let i = 0; i < 5; i++) {
  console.log(i);
}

// for in loop
let person3 = {name: 'John', age: 25};

for (let key in person3) {
  console.log(key + ': ' + person[key]);
}

// while loop
let num4 = 0;

while (num4 < 5) {
  console.log(num1);
  num1++;
}

// do while loop
let num5 = 0;

do {
  console.log(num2);
  num2++;
} while (num5 < 5);

// break statement
for (let i = 0; i < 10; i++) {
  if (i === 5) {
    break;
  }
  console.log(i);
}

// continue statement
for (let i = 0; i < 5; i++) {
  if (i === 2) {
    continue;
  }
  console.log(i);
}







