// allows to represent number of elements as an array

function add(...n1){
    console.log(n1);
}

add(2,3,4,5);

console.log("----------- Rest Parameter -------------");

function add(n, ...n1){
    console.log(n1);
    console.log(n);
    
}

add(10,20,30,40,50);