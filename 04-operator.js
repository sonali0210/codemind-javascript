function isEven(num){
    var result = num % 2;
    console.log(`Remainder is: ${result}`);
    console.log(`Remainder 0 means : EVEN , or it is odd : ${result}`);
    
    // Ternary Operator
    console.log("=========== Ternary Operator ===========");
    var res = num % 2 == 0 ? "Even" : "Odd" ;
    console.log(`Given number ${num} is ${res}`);   
}

isEven(5);
isEven(12);

console.log("====== Number is Positive or Negative ======");

function isPositive(num){
    var result = num > 0 ? "Positive" : "Negative";
    console.log(`Given number ${num} is ${result}`);
}
isPositive(-12);
isPositive(12);