const arrayNum = [20,30,40,60,80,10,70];

arrayNum.forEach((element,index,arrayNum)=>{
    // console.log(`Element at index ${index} is ${element}`);
    console.log(element,index,arrayNum);
    
})

arrayNum.forEach((element)=>{
    console.log(element);
})



console.log("----- Traversing Set -------------");

let mySet = new Set();
mySet.add(10);
mySet.add(20);
mySet.add(30);
// mySet.add(10); // duplicate value, ignored
mySet.forEach((element)=>{
    console.log(element);
})


console.log(`----- Traversing map --------`);
const mapStudents = new Map();
mapStudents.set(11, "Jenny");
mapStudents.set(22, "Stew");
mapStudents.set(33, "Elon");
mapStudents.set(22, "Bill");
mapStudents.set(55, "Jenny");
mapStudents.forEach((value,key)=>{
    console.log(`${key},${value}`);
})