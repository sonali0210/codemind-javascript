// const array = [6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
// console.log(`Original array:`, array);
// console.log("");

// //  Use the map method to create a new array with each number doubled
// console.log("----- Using Map Method -----");

// let mappedArray = array.map((element) => {
//     return element * 2;
// });

// console.log(`New array with each number doubled is:`, mappedArray);
// console.log("");


// //  Use the filter method to create a new array with only even numbers
// console.log("----- Using Filter Method -----");

// let filteredArray = array.filter((element) => {
//     return element % 2 === 0;
// });

// console.log(`New array with only even numbers is:`, filteredArray);


let student  = {
    name: "Sarah",
    age: 20,
    scores : {
        math: 90,
        english: 85,
        science: 95
    }
}

console.log(`Student object:`);
console.log(student);
console.log(`Scores: `, student.scores);

console.log("");


// Destructuring the object to extract properties
console.log(`Student's name and age using object destructuring:`);
let{name, age} = student;
console.log(`Name: ${name}, Age: ${age}`);

console.log("");

const scores = [85, 90, 78, 92, 88];
let lengthArray = scores.length;
console.log(`Given Scores:`, scores);

function calculateAverage(...scores){

    let total = scores.reduce((sum, score) => {
        return sum + score; 
    },0);

    let average = total / lengthArray;
    return average;
};
let average = calculateAverage(...scores);
console.log(`The average score using rest operator is: ${average}`);


