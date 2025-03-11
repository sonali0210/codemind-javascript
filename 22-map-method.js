// Used to create a new array by making changes to the 
// element of the original array

const arrayNum = [20,30,40,60,80,10,70];

let updatedArray = arrayNum.map((element) =>{
    return element * element;
});
console.log(updatedArray);

