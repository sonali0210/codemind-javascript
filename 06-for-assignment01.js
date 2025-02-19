
console.log(`Step 1: Print Numbers from 5 to 15 by incrementing 1`);
console.log("");
let output = '';
for (let i = 5; i <= 15; i++) {
    output += i + ' ';
}
console.log(output.trim());

console.log("--------------------------------");
console.log(`Step 2: Print Numbers from 50 to 40 by decrementing 1`);
console.log("");
let result = ' ';
for(var i = 50; i>=40; i--){
    result += i + ' ';
}
console.log(result);

console.log("--------------------------------");
console.log(`Step 3: Print first 15 odd numbers`);
console.log("");
let oddNumbers = '';
for (var index = 1; index <= 30; index+=2) {
    oddNumbers += index + ' ';
}
console.log(oddNumbers.trim());

console.log("--------------------------------");
console.log(`Step 4: Print first 10 even numbers`);
console.log("");
let evenNumbers = '';
for (var index = 2; index <= 20; index+=2) {
    evenNumbers += index + ' ';
}
console.log(evenNumbers);


console.log("--------------------------------");
console.log(`Step 5: Print table of 5`);
console.log("");
let table = '';
// for(var i = 1; i <= 10; i++){
//     console.log(`${i * 5}`);
// }

for(var i = 5; i<=50; i+=5){
    table += i + ' ';
}
console.log(table.trim());

console.log("--------------------------------");
console.log(`Step 6: Print table of 10`);
console.log("");
let table10 = '';

// for(var i = 1; i <= 10; i++){
//     console.log(`${i * 10}`);
// }
for(var i = 10; i<=100; i+=10){
    table10 += i + ' ';    
}
console.log(table10.trim());

console.log("--------------------------------");
console.log(`Step 7: Print table of 10 in reverse order`);
console.log("");
let table10Reverse = '';

for(var i = 100; i >= 10 ; i -= 10){
    table10Reverse += i + ' ';
}
console.log(table10Reverse);
