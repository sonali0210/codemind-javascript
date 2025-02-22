console.log("===== 1: Print numbers from 5 to 15 incrementing 1 ======");
var i=5;
var incr = "";
while (i <= 15) {
    incr += i + "  ";
    i++;
}
console.log(incr.trim());
console.log("");


console.log("===== 2: Print numbers from 50 to 40 decrementing 1 ======");
var i = 50;
var decr = "";
while(i >= 40){
    decr += i + "  ";
    i--;
}
console.log(decr.trim());
console.log("");

console.log("===== 3: Print first 15 odd numbers ======");
var i = 1;
var odd = "";
while(i <= 30){
    odd += i + "  ";
    i += 2;
}
console.log(odd.trim());
console.log("");

console.log("===== 4: Print first 10 even numbers ======");
var i = 2;
var even = "";
while(i <= 20){
    even += i + "  ";
    i += 2;
}
console.log(even.trim());
console.log("");

console.log("===== 5: Print table of 5 ======");
var i = 5;
var table5 = "";
while(i <= 50){
    table5 += i + "  ";
    i += 5;
}
console.log(table5.trim());
console.log("");

console.log("===== 6: Print table of 10 ======");
var i = 10;
var table10 = "";
while(i <= 100){
    table10 += i + "  ";
    i += 10;
}
console.log(table10.trim());
console.log("");

console.log("===== 7: Print table of 10 in reverse ======");
var i = 100;
var table10Reverse = "";
while(i >= 10){
    table10Reverse += i + "  ";
    i -= 10;
}
console.log(table10Reverse.trim());
