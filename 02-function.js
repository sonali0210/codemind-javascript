//Function Definition
// Type 1: Function with no argument or parameter and no return value
function test(){
    console.log("Test");   
}


test(); //Function call


// Type 2: Function with argument or parameter and no return value

function square(num) {
    console.log(`Finding the square: ${num}`);
    var result = num * num;
    console.log(`The square of ${num} is ${result}`);
}

square(8);
square(19);

// Type 3: Function with argument or parameter and return value

function addition(n1,n2,n3,n4) {
    console.log(`Number to add: ${n1},${n2},${n3},${n4}`);
    var result = n1 + n2 + n3 + n4;
    return result;  
}

var returnValue = addition(5,7,8,9);
console.log(`Addition is: ${returnValue}`);

var returnValue = addition(12,25,15,63);
console.log(`Addition is: ${returnValue}`);


function name(firstName,middleName,lastName){
    var fullName = firstName.concat(middleName).concat(lastName);
    console.log(`Full name is: ${fullName}`);
    
}

name("Sonali ","Krushna ","Surpatne");

