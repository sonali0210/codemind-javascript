const city = "Pune";
console.log(city);

// city = "Mumbai"; // Error: Assignment to constant variable.
// console.log(city);

let age;
console.log(age); // undefined
age = 25;
console.log(age); 
age = 30;
console.log(age);

let name = "John";
console.log(name); // John

// let name = "Doe"; // Error: Identifier 'name' has already been declared
// console.log(name);

var country = "India";
console.log(country); // India
var country = "USA";
console.log(country); // USA

function show() {
    if(10>5){
        var fname = "John";
        let city = "Pune";
        // const age = 25;
        console.log(fname, city);
    }
    // console.log(firstName, lastName, position);  
    console.log(fname, city); 
}
show();
// console.log(firstName, lastName, position); //ReferenceError: firstName is not defined
// console.log(fname, city, age); //ReferenceError: fname is not defined
    // var firstName = "John";
    // let lastName = "Doe";
    // const position = "QA Engineer";