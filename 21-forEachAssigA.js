const arrayNumbers = [1,-7,40,502,-77,91,0,108,89,-601];

console.log(`------ Step 1 ------`);
arrayNumbers.forEach((element,index,arrayNumbers) => {
    console.log(`Index: ${index}, Element: ${element}`);
});

console.log("");

console.log(`------ Step 2 ------`);

let positive = [];
arrayNumbers.forEach((element) => {
    if(element > 0){
        positive.push(element);
    }
});
console.log(`Positive Numbers: ${positive} `);

console.log("");

console.log(`------ Step 3 ------`);
const newArray = [];
arrayNumbers.forEach((element) => {
    if (element < 0) {
        newArray.push(element);
    }
});
console.log(`Negative Numbers: ${newArray}`);

console.log("");

console.log(`------ Step 4 ------`);
let even = [];
arrayNumbers.forEach((element) => {
    if(element % 2 == 0){
        even.push(element);
    }
});
console.log(`Even Numbers: ${even}`);

console.log("");

console.log(`------ Step 5 ------`);

let arraySum = 0;
arrayNumbers.forEach((element) =>{  
    arraySum += element;
});
console.log(`Sum of all numbers: ${arraySum}`);

console.log("");

console.log(`------ Step 6 ------`);

let evenIndex = [];
arrayNumbers.forEach((element,index) =>{
    if(index % 2 == 0){
        evenIndex.push(element);
    }
});
console.log(`Even Index Numbers: ${evenIndex}`);
