// sort the elements of an array and return sorted array
// by default : sort in asc order

const frndList = ["Jenny","Steve","Bill","Elon"];
// const reverse = frndList.reverse();
// console.log(reverse );
console.log(frndList);
const sorting = frndList.sort();
console.log(sorting);
const desc = sorting.reverse();
console.log(desc);


// for numbers, a comparison function is created
const arrayNum = [4, 9, 16, 5, 31, 81, 350];
arrayNum.sort((a,b)=>{
    return a>b? 1:-1;
});
console.log(arrayNum);
console.log(arrayNum.reverse);
