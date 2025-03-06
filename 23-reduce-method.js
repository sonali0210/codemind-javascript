const array = [4,9,6,5,3,8,1];
const sum = array.reduce( (runningTotal, element)=> {
    return runningTotal + element; 
},0);
console.log(sum);


const multi = array.reduce( (runningTotal, element)=> {
    return runningTotal * element; 
},1);
console.log(multi);

const arrayOne = [4, 9, 6, 5, 3, 8, 1];
// Sum the even numbers
// const evenArray = arrayOne.filter((element)=>{
//     return element%2==0;
// });
// const sumEven = evenArray.reduce( (runningTotal, element)=>{
//     return runningTotal + element;
// }, 0);
// console.log(sumEven);

const sumEven = arrayOne.filter((element)=>{
    return element%2==0;
}).reduce( (runningTotal, element)=>{
    return runningTotal + element;
}, 0);
console.log(sumEven);