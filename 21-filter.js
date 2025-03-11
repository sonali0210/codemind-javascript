// used to create a new array with all elements that 
// match the given condition

const array = [7,15,20,3,25,2,40];

const arr = array.filter((element) =>{
    return (element % 5 == 0)
});
console.log(`Multiples of 5 are:`);
console.log(arr);
