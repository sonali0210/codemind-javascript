const array_numbers = [20,11,40,25,37,49,9,90,60,2,19];

console.log(`Initial array: `);
console.log(array_numbers);
console.log("");


console.log(`---------- Step 1.a: Using reduce method ----------`);
let sumArray = array_numbers.reduce((runningTotal,element) => {
    return (runningTotal + element);
});
console.log(`Sum of all numbers in the array is: ${sumArray}`);

console.log("");

console.log(`---------- Step 1.b: Using traditional way ----------`);
let arraySum = 0;
let length = array_numbers.length;
for(let i = 0 ; i <= length - 1 ; i++){
    arraySum = arraySum + array_numbers[i];
}
console.log(`Sum of all numbers in the array is: ${arraySum}`);

console.log("");

console.log(`---------- Step 2 ----------`);
let filteredArray = array_numbers.filter((element) => {
    return (element % 5 == 0);
});

let sum = filteredArray.reduce((runningTotal,element) => {
    return (runningTotal + element);
});
console.log(`Sum of multiples of 5 in the given array is: ${sum} `);
