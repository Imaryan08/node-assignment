//! Get current date and time:
const now = new Date();

//! Check if a variable is an array:
const arr = ["apple", "mango", "banana", "grapes"];
// console.log(Array.isArray(arr));

//! Merge two arrays:
const arr1 = [1, 2];
const arr2 = [3, 4];
let newArr = arr1.concat(arr2);
// console.log(newArr)

//! Remove duplicates from an array:
const array = [1, 1, 2, 3, 3, 4, 4, 5];
const uniqueArray = [...new Set(array)];
// console.log(uniqueArray);

//! Sort an array in ascending order:
array.sort((a, b) => a - b);
// console.log(array);

//! Reverse an array
// console.log(array.reverse());

//!  Generate a random number between two values:
const max = 10;
const min = 5;
const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
// console.log(randomNumber);

//! Check if a string contains a substring:
// string.includes(substring);

//! Get the length of an object:

let obj = {
  name: "aryan",
  place: "delhi",
};

// console.log(Object.keys(obj).length);

const objarr = Object.entries(obj);
console.log(objarr);

//TODO : https://www.javacodegeeks.com/2023/05/20-best-javascript-snippets.html
