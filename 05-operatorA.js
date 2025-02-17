console.log("=================STEP 1 ==================");


function squareOfWordLength(string){
    console.log(`The string is :  ${string}`);
    
    var length = string.length;
    console.log(`Length of the string is : ${length}`);
    
    var lengthSquare = length * length;
    return lengthSquare;
}
var result = squareOfWordLength("Javascript");
console.log(`The length square of the given word is :  ${result}`);
console.log("======================================================");

var result = squareOfWordLength("Google Chrome");
console.log(`The length square of the given word is :  ${result}`);
console.log("======================================================");

var result = squareOfWordLength("Web Developer Smart");
console.log(`The length square of the given word is :  ${result}`);

console.log("                                                             ");

console.log("=================STEP 2 ==================");

function division(){
    var string = "I am UI Developer";
    console.log(`The string is :  ${string}`);
    var strLength = string.length;
    console.log(`Length of the string is : ${strLength}`);
    var totalWords = string.split(" ");
    var count = totalWords.length;
    console.log(`Total words in the string are : ${totalWords.length}`);
    var result = strLength / count;
    console.log(`The result of division of string length: ${strLength} and total word count: ${count} is : ${result}`);

    console.log("======================================================");

    var result = strLength * count;
    console.log(`The result of multiplication of string length: ${strLength} and total word count: ${count} is : ${result}`);
}
division();