// create a new array with all elements of the same 
// depth

// i.e. nested array elements are converted to a 
// single array 

const arrayMarks = [45,70,40, , ,7, ,];
// const flattenArray = arrayMarks.flat(2);
// console.log(flattenArray);

console.log(arrayMarks.length);
console.log(arrayMarks);

const empty = arrayMarks.flat();
console.log(empty);