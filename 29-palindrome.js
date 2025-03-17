function isPalindrome(str) {
    let strReverse = str.split("").reverse().join("");
    if(str == strReverse){
        console.log(`Given string: "${str}"`);   
        console.log("It is a Palindrome");
    }
    else{
        console.log(`Given string: "${str}"`);
        console.log("It is not a Palindrome");
    }
    console.log("---------------------------------");
    
}

isPalindrome("madam");
isPalindrome("141");
isPalindrome("Sunday");
isPalindrome("mom");
isPalindrome("listen");
isPalindrome("dad");