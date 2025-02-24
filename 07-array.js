let arrayNum = [10,20,30,40,20,50];
console.log(arrayNum);
console.log(`Array length: ${arrayNum.length}`);

// Access elements of an array using index
const elementAtIndex2 = arrayNum[2];
console.log(`Element at index 2: ${elementAtIndex2}`);

// Update element of an array using index
arrayNum[4] = 35;
console.log(`Array after updating element at index 4: ${arrayNum}`);

// Push element to the end of an array
arrayNum.push(60);
console.log(`Array after pushing element 60: ${arrayNum}`);

// Pop element from the end of an array
arrayNum.pop();
console.log(`Array after popping element: ${arrayNum}`);

// Unshift element to the beginning of an array
arrayNum.unshift(5);
console.log(`Array after unshifting element 5: ${arrayNum}`);

// Shift element from the beginning of an array
arrayNum.shift();
console.log(`Array after shifting element: ${arrayNum}`);


// Splice method
console.log("=====Splice method=====");

const array = [20, 30, 40, 50, 60];
console.log(array);
const arraySplice = array.splice(2);
console.log(arraySplice);
console.log(array);

console.log("=====Splice method with 3 arguments=====");

arrayTwo = [20, 30, 40, 50, 60, 70, 80];
console.log(arrayTwo);
const arraySpliceTwo = arrayTwo.splice(1, 2);
console.log(arraySpliceTwo);
console.log(arrayTwo);

console.log("=====Splice method to add elements without deleting =====");
arrayThree = [20, 30, 40, 50, 60, 70, 80];
console.log(arrayThree);
arrayThree.splice(2, 0, 35, 45);
console.log(arrayThree);

console.log("=====Splice method to delete and add elements =====");
arrayFour = [20, 30, 40, 50, 60, 70, 80];
console.log(arrayFour);
arrayFour.splice(2, 2, 35, 45);
console.log(arrayFour);