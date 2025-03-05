// Arrow Function with no param and no return value
console.log(`Arrow Function with no param and no return value`);

let add = () => {
    console.log((`Addition`));
    
}

add();
console.log("");

// Arrow Function with  param and no return value
console.log(`Arrow Function with  param and no return value`);

let addition = (p1,p2=0) => {
    console.log((`Addition: ${p1+p2}`));
    
}

addition(12,34);
addition(40);
console.log("");

// Arrow Function with  param and  return value
console.log(`Arrow Function with  param and  return value`);

let square = (num) => {
    let result = num * num;
    return result;
}
let squareResult = square(5);
console.log(squareResult);


// Cube of number 7
let cube = (num) => {
    console.log(`Cube of ${num} is : ${num*num*num}`);
    
}
cube(7);

