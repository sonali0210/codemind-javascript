// Function that takes function as argument 
// and returns function as output is 
// called higher order function


function jenny(callback) {
    console.log(`------- Jenny went home and had snacks -------`);
    console.log(`------- Jenny started homework prep ----------`);
    console.log(`------- After 2 hrs homework completed -------`);
    callback();
    return function(){
        console.log(`------- Jenny went to bed at 10:00 PM -------`);
    }
}
let elon = function(){
    console.log(`******** Elon went home and had snacks ********`);
    console.log(`******** Elon went to play match **********`);
    console.log(`******** Elon came back and started copying homework **********`);
    console.log(`******** Homework completed **********`);
    
}
let result = jenny(elon);
console.log("-=====");
console.log(result);
result();
