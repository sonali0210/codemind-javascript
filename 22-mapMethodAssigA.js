const arrayNumbers = [20,11,40,25,23,11,9,31,60,2,19];

console.log(`------- Step 1 -------`);
let newArrayNumbers = arrayNumbers.map((element) => {
    return (element+10);
});
console.log(`Array after adding 10 to each element`);
console.log(newArrayNumbers);

console.log("");
console.log(`------- Step 2 -------`);
let cubeArray = arrayNumbers.map((element) =>{
    return (element*element*element);
});
console.log(`Array of the cube of each element of the Initial Array`);
console.log(cubeArray);

console.log("");
console.log(`------- Step 3 -------`);
let newArray = arrayNumbers.map((element,index) => {
    return (element+index);
});
console.log(`New array with the sum of index and its value is :`);
console.log(newArray );



