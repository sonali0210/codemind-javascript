// Objective: Object Literals
// 1. Object Literals
let person  = {
    firstName: "John",
    lastName: "Doe",
    age: 25,
    city: "Pune",
}
console.log(typeof person);

console.log(`------------ Accessing Object Properties ------------`);
console.log(`First Name : ${person.firstName}`);
console.log(`Last Name : ${person["lastName"]}`);

console.log(`------------ Updating Properties ------------`);
person.age = 30;
console.log(`Age : ${person.age}`);
person["city"] = "Mumbai";
console.log(`City : ${person.city}`); 

console.log(`------------ Deleting Properties ------------`);
delete person.city;
console.log(person);

console.log(`------------ After object creation,  Adding Properties ------------`);
person.isMarried = true;
person["isEmployed"] = false;
console.log(person);

console.log(`------------ Traversing  Objects ------------`);
for (const key in person) {
    if (Object.prototype.hasOwnProperty.call(person, key)) {
        const element = person[key];
        console.log(`${key} : ${element}`);
    }
}

console.log(`------------ Empty Objects ------------`);
let address = {

};
address.pinCode = 411014;
console.log(address);


console.log("==== Nested Objects =======");
let student = {
    firstName: "Jenny",
    lastName: "Gates",
    age: 22,
    college: "Government College Pune",
    address:{
        flat: 1005,
        society: "Horizon",
        street: "SB Road",
        city: "Pune"
    }
}
console.log(student.address);
console.log(`Street: ${student.address.street}`);
console.log(`City: ${student.address.city}`);
student.address.floorNumber = 10;
console.log(student.address);

console.log(`------------ Object with actions or methods ------------`);
let employee = {
    name: "John",
    age: 30,
    city: "Pune",
    walk: function(){
        console.log(`I can walk ..`);
    },
    details : function(){
        console.log(`Employee Details : Name : ${this.name}`);
    }
}
employee.walk();
employee.details();