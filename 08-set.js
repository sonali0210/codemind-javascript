// NO duplicate elements allowed


const mySet = new Set();
mySet.add(10);
mySet.add(20);
mySet.add(10);
mySet.add(40);
console.log(mySet);
console.log(`Size: ${mySet.size}`);
mySet.delete(40);
console.log(mySet);

console.log(`Is 10 Available : ${mySet.has(10)}`);

console.log(`Traversing`);

for (const element of mySet) {
    console.log(element);
}

console.log(`======== Remove duplicates from array =========`);
let array = [1,2,3,4,5,1,2,3,4,5,6,7,8,9,10];
console.log(`Original Array: ${array}`);
const uniqueArray = [...new Set(array)]; // using spread operator
console.log(`Unique Array: ${uniqueArray}`);

