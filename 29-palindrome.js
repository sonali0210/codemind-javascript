// function isPalindrome(str) {
//     let strReverse = str.split("").reverse().join("");
//     if(str == strReverse){
//         console.log(`Given string: "${str}"`);   
//         console.log("It is a Palindrome");
//     }
//     else{
//         console.log(`Given string: "${str}"`);
//         console.log("It is not a Palindrome");
//     }
//     console.log("---------------------------------");
// }

function isPalindrome(str){
    let leftIndex = 0;
    let rightIndex = str.length - 1;
    while(leftIndex < rightIndex){
        if(str[leftIndex] != str[rightIndex]){
            return false;
        }
        leftIndex++;
        rightIndex--;
    }
    return true;
}

const condn1 = isPalindrome("madam");
console.log(`Given string: "madam"`);
console.log(`Is Palindrome: ${condn1}`);

const condn2 = isPalindrome("141");
console.log(`Given string: "141"`);
console.log(`Is Palindrome: ${condn2}`);

const condn3 = isPalindrome("Sunday");
console.log(`Given string: "Sunday"`);
console.log(`Is Palindrome: ${condn3}`);

const condn4 = isPalindrome("mom");
console.log(`Given string: "mom"`);
console.log(`Is Palindrome: ${condn4}`);

const condn5 = isPalindrome("listen");
console.log(`Given string: "listen"`);
console.log(`Is Palindrome: ${condn5}`);

const condn6 = isPalindrome("dad");
console.log(`Given string: "dad"`);
console.log(`Is Palindrome: ${condn6}`);