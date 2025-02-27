console.log(`--------- Object Freezing ---------`);

let employee = {
    name: 'John',
    age: 30,
    city: 'New York'
}
console.log(employee);
Object.freeze(employee);
employee.age = 40;
employee.city = 'Chicago';
console.log(employee);
