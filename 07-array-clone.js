let arrayNumbers = [7,2,1,5,8,6];

console.log(`----- Duplicate array -----`);
console.log("");
console.log(`Shadow copy`);
let duplicateArray = arrayNumbers;
console.log(duplicateArray);

console.log("");
console.log(`Deep copy`);
// Spread operator
console.log(`Spread operator`);
let duplicateArraySpread = [...arrayNumbers];
console.log(duplicateArraySpread);

console.log("");
console.log(`Concat method using spread operator`);

let arr1 = [1,2,3,4,5];
let arr2 = [6,7,8,9,10];
let arr3 = [...arr1, ...arr2];
console.log(arr3);

let arr4 = arr1.concat(arr2);
console.log(arr4);
