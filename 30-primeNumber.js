const array = [3,9,7,6,19,29,53];

console.log("--------- Count Prime Numbers -----------");
console.log("");

function isPrime(num){
    for(let i = 2; i < num; i++){
        if(num % i == 0){
            return false;
        }
    }
    return true;
}


let primeCount = 0;
let primeArray = [];
for (let index = 0; index < array.length; index++) {
    const element = array[index];
    if(isPrime(element) == true){
        // primeArray += element + " ";
        primeCount++;
    }
}

console.log(`Given Array:`);
console.log(array);

console.log("");
console.log(`Number of prime numbers in the array: ${primeCount}`);
console.log("");


// count number of spaces in the given sentence
console.log(`-------- Count number of spaces in a string------------`);
console.log("");


function spaceCount(str){
    let count = 0;
    for(let i=0; i<str.length; i++){
        if(str[i] == " "){
            count++;
        }
    }
    return count;
}
const str1 = "Revision is the mother of success";
const count1 = spaceCount(str1);
console.log(`String 1:`);
console.log(str1);
console.log(`Space Count: ${count1}`);

console.log("");


const str2 = "JavaScript is the language of internet world";
console.log(`String 2:`);
const count2 = spaceCount(str2);
console.log(str2);
console.log(`Space Count: ${count2}`);

console.log("");

console.log(`------------ Given string is palindrome or not --------------`);

console.log("");

function isPalindrome(str){
    let left = 0;
    let right = str.length-1;
    while(left < right){
        if(str[left] != str[right]){
            return false;
        }
        left++;
        right--;
    }
    return true;
}

console.log(`---- madam ----`);
const arg1= "madam";
const val1 = isPalindrome(arg1);
console.log(`Is given string a palindrome: ${val1}`);

console.log(`---- 141 ----`);
const arg2= "141";
const val2 = isPalindrome(arg2);
console.log(`Is given string a palindrome: ${val2}`);

console.log(`---- Sunday ----`);
const arg3= "Sunday";
const val3 = isPalindrome(arg3);
console.log(`Is given string a palindrome: ${val3}`);

console.log(`---- mom ----`);
const arg4= "mom";
const val4 = isPalindrome(arg4);
console.log(`Is given string a palindrome: ${val4}`);

console.log(`---- listen ----`);
const arg5= "listen";
const val5 = isPalindrome(arg5);
console.log(`Is given string a palindrome: ${val5}`);

console.log(`---- dad ----`);
const arg6= "dad";
const val6 = isPalindrome(arg6);
console.log(`Is given string a palindrome: ${val6}`);



