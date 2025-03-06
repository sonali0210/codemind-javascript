const arrayNumbers = [20,11,40,25,37,49,9,90,60,2,19];

console.log(`-------- Step 1 --------`);
let greaterNum = arrayNumbers.filter((element) =>{
    return (element > 50);
});
console.log(`Array of numbers greater than 50:`);
console.log(greaterNum);
console.log("");

console.log(`-------- Step 2 --------`);
let evenArray = arrayNumbers.filter((element) => {
    if (element % 2 == 0) {
        return element
    }
});
console.log(`Even numbers in the array:`);
console.log(evenArray);
console.log("");


console.log(`-------- Step 3 --------`);
let oddArray = arrayNumbers.filter((element) => {
    if (element % 2 != 0) {
        return element;
    }
});
console.log(`Odd numbers in the array:`);
console.log(oddArray);
console.log("");


console.log(`-------- Step 4 --------`);
let multiple5 = arrayNumbers.filter((element) => {
    return (element % 5 == 0);
});
console.log(`Numbers in the array that are multiples of 5:`);
console.log(multiple5);
console.log("");


console.log(`-------- Step 5 --------`);
let numRange = arrayNumbers.filter((element) => {
    return (element >= 20 && element <= 50);
});
console.log(`Numbers in range of 20 and 50 are:`);
console.log(numRange);


