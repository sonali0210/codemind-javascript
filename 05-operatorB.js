console.log("========== Step 1 ==========");
function greaterNumber(num1, num2) {
    var greater = num1 > num2 ? num1 : num2;
    console.log(`Greater number between ${num1} and ${num2} is: ${greater}`);
}
greaterNumber(10,-10);
greaterNumber(800,899);

console.log("                            ");
console.log("========== Step 2 ==========");

function isEvenOrOddNum(num) {
    var result = num % 2 == 0 ? "True" : "False";
    return result;
}
var returnValue = isEvenOrOddNum(29);
console.log(`The number ${29} is ${returnValue}`);
var returnValue = isEvenOrOddNum(44);
console.log(`The number ${44} is ${returnValue}`);
var returnValue = isEvenOrOddNum(0);
console.log(`The number ${0} is ${returnValue}`);
var returnValue = isEvenOrOddNum(101);
console.log(`The number ${101} is ${returnValue}`);

console.log("                            ");
console.log("========== Step 3 ==========");

function wordLength(str) {
    var strLength  = str.length;
    var isEvenOrOdd = strLength % 2 == 0 ? "EVEN" : "ODD";
    console.log(`The length of the word ${str} is: ${strLength}`);
    return isEvenOrOdd;
   
}
var returnValue = wordLength("Javascript");
console.log(`The length of the word is: ${returnValue}`);
var returnValue = wordLength("developer");
console.log(`The length of the word is: ${returnValue}`);
var returnValue = wordLength("Google");
console.log(`The length of the word is: ${returnValue}`);