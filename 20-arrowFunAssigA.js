console.log(`----- Arrow Function with no argument and no return value -----`);
let greet = () => {
    console.log(`Good Morning, Today is Wednesday`);
}
greet();

console.log("");

console.log(`----- Arrow Function with 3 argument and no return value -----`);
let multiply = (m1,m2,m3=1) => {
    console.log(`Multiplication of ${m1},${m2},${m3} is: ${m1*m2*m3}`);
}
multiply(5,5,2);
multiply(10,4);


console.log("");

console.log(`----- Arrow Function with 5 argument and return value -----`);
let sum = (a,b,c,d,e) => {
    let result = a + b + c + d + e;
    return result;
}
let sumResult = sum(100,100,200,349,756);
console.log(`The addition of the numbers is: ${sumResult}`);

let stringResult = sum("I am"," learning"," ES6"," features"," in depth");
// let trimmed = stringResult.trim();
console.log(`The addition of the strings is: ${stringResult}`);
