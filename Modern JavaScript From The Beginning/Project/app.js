// console.log(123);
// console.log([1, 2, 3, 4]);
// console.table({a:1, b:2});

// // var, let, const
// var name = 'John Doe';
// console.log(name);
// name = 'Steve Smith';
// console.log(name);

// // Init var
// var greeting;
// console.log(greeting);
// greeting = 'Hello';
// console.log(greeting);

// // var declarations can only include letters, numbers, _, $
// // var decs cannot begin with a number
// // only use $varDeclarations with jQuery
// // var _underscore allowed but not recommended

// // Multi word vars
// var firstName = 'John'; // using cameCase - suggested
// var first_name = 'Sara'; // seen more in php
// var FirstName = 'Tom'; // PascalCase
// var firstname = 'John'; // allowed; not recommnded

// let and const - advantages in block level scoping
// LET (comment out shortcut - Highlight, cntrl + /)
// let name;
// name = 'John Doe';
// console.log(name);

// // Const - Constant Variable, cannot be reassigned, need to be assigned a value
// const name = 'Mo Jackson';
// console.log(name);
// name = 'Sara'; <---Not Allowed
// const person = {
//     name: 'John',
//     age: 30
// }
// console.log(person);
// person.name = 'Sara';

// console.log(person);
// // Data is changed, object is preserved.
// // use const to let others know that a value should and cannot be changed, for preservation purposes


/* Data Types
Primitive Data Types 
    Strings
    Number
    Boolean
    Null
    Undefined
    Symbols (ES6) 
Reference Data Types
    Arrays
    Object Literals
    Functions
    Dates
    Anything Else...

*/
// Primitive Types
// String
const name = 'John Doe';
// Number
const age = '45';
// Boolean
const hasKids = true;
// Null
const car = null;
// Undefined
let test;
// Symbol
const sym = Symbol();

// Refernce Types - Objects
// Array
const hobbies = ['movies', 'music'];
// Object Literal
const address = {
    city: 'Boston',
    state: 'MA'
}
const today = new Date();

console.log(today);
console.log(typeof today);