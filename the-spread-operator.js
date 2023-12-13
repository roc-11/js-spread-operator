/**
 * To run this file in Gitpod, use the 
 * command node the-spread-operator.js in the terminal
 */

// No spread operator

let array1 = [1, 2, 3];
let array2 = array1;
array2.push(4);
console.log("Second array:", array2);
console.log("First array:", array1);
// they're now the same OBJECT

// Copying an array
let array3 = [4, 5, 6];
let array4 = [...array3];
// the ... operator spreads the values of array3 into array4. So new object.

array4.push(7);

console.log("Third array:", array3);
console.log("Fourth array:", array4);

// Copying an object
let obj1 = {a : 1, b : 2, c : 3};
let obj2 = { ...obj1, d : 4};
let obj3 = {...obj1, b : 5};
console.log("First Object:", obj1);
console.log("Second Object:", obj2);
console.log("Third Object:", obj3);

// Copying only part of an array/object
let array5 = [...array1, {...obj1}, ...array3, "x", "y", "z"];
console.log("Fifth Array:", array5);
