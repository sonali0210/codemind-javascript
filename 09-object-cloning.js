let employee = {
    name: 'John',
    age: 30,
    city: 'New York'
}

// let student = {}
// student = employee; // Shallow cloning
// console.log(student);

const clonedObject = Object.assign({}, employee); // Deep cloning
console.log(clonedObject);

console.log(`--------- Merge Objects ---------`);
let std = {
    name: 'John',
    age: 30,
    city: 'New York'
}

const address = {
    street: '123 Main St',
    city: 'New York',
    state: 'NY'
}
console.log(std);
console.log(address);
console.log(`Merged Object:`);

const mergedObject = Object.assign({},std, address);
console.log(mergedObject);