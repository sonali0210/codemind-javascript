console.log("===== 1: Print numbers from 5 to 15 incrementing 1 ======");
var i=5;
var incr = "";
do{
    incr += i + "  ";
    i++;
}
while (i <= 15)
console.log(incr.trim());
console.log("");

console.log("===== 2: Print numbers from 50 to 40 decrementing 1 ======");
var i = 50;
var decr = "";
do {
    decr += i + "  ";
    i--;
} while (i >= 40);
console.log(decr.trim());
console.log("");

console.log("===== 3: Print first 15 odd numbers ======");
var i = 1;
var odd = "";
do {
    odd += i + "  ";
    i += 2;
} while (i <= 30);
console.log(odd.trim());
console.log("");

console.log("===== 4: Print first 10 even numbers ======");
var i = 2;
var even = "";
do {
    even += i + "  ";
    i += 2;
} while (i <= 20);
console.log(even.trim());
console.log("");

console.log("===== 5: Print table of 5 ======");
var i = 5;
var table5 = "";
do {
    table5 += i + "  ";
    i += 5;
} while (i <= 50);
console.log(table5.trim());
console.log("");

console.log("===== 6: Print table of 10 ======");
var i = 10;
var table10 = "";
do {
    table10 += i + "  ";
    i += 10;
} while (i <= 100);
console.log(table10.trim());
console.log("");

console.log("===== 7: Print table of 10 in reverse ======");
var i = 100;
var table10Reverse = "";
do {
    table10Reverse += i + "  ";
    i -= 10;
} while (i >= 10);
console.log(table10Reverse.trim());
