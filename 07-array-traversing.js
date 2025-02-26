const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (let index = 0; index < array.length; index++) {
    const element = array[index];
    console.log(`Element at index ${index} is: ${element}`);
}

console.log(`======== Sum of all elements in array =========`);
let sum = 0;
for (let index = 0; index < array.length; index++) {
    const element = array[index];
    sum += element;    
}
console.log(`Sum of all elements in array: ${sum}`);

console.log(`======== Sum of even elements in array =========`);
console.log(`ForOf loop`);

let arrayEven = [1,5,6,8,9,10,12,15,16,18,20];
let sumEven = 0;
for (const element of arrayEven) {
    if (element % 2 === 0) {
        sumEven += element;
    }       
}
console.log(`Sum of even elements in array: ${sumEven}`);

let sumOdd = 0;
for (const element of arrayEven) {
    if (element % 2 !== 0) {
        sumOdd += element;
    }       
}
console.log(`Sum of odd elements in array: ${sumOdd}`);

console.log(`======== Reverse array Traversing =========`);
let arrayReverse = [1,2,3,4,5,6,7,8,9,10];
for (let index = arrayReverse.length - 1; index >= 0; index--) {
    const element = arrayReverse[index];
    console.log(`Element at index ${index} is: ${element}`);
} 

console.log(`======== Joining array elements =========`);
let arrayJoin = ['I', 'am', 'a', 'developer'];
let joinedString = arrayJoin.join(' ');
console.log(joinedString);

