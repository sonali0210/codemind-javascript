var greet = "Good Morning";

var greetLength = greet.length;
console.log("Total Number of Characters: ",greetLength);

var charAt0 = greet.charAt(0);
console.log("Character at Index 0: ", charAt0);

var charAtLast = greet.charAt(greetLength-1);
console.log("Character at Last Index: ", charAtLast);


var str1 = "Hello";
var str2 = "Good Morning";

var concatResult = str1.concat(str2);
console.log("String one: ",str1, "String two: ",str2,  "Concatenated String: ", concatResult);
//String Template Backtick ` , $ , {}
console.log(`String one: ${str1}, String two: ${str2}, Concatenated String: ${concatResult} `)


var IndexOf = greet.indexOf("M");
console.log("Index of M: ",IndexOf);
console.log(`Index of M: ${IndexOf}`);


var replacementResult = greet.replace("Morning","Evening");
console.log(`Replacement Result: ${replacementResult}`);

var uppercaseResult = greet.toUpperCase(greet);
console.log(`Uppercase Result: ${uppercaseResult}`);

var city = "  Pune  ";
var cityLength = city.length;
console.log(`Before trim : ${city}, Length: ${cityLength}`);
var trimResult = city.trim();
var trimLength = trimResult.length;
console.log(`After trim : ${trimResult}, Length: ${trimLength}`);

console.log(`Count the total number of spaces available in the start and end: ${cityLength-trimLength}`);


var country = "   United States of America";
var countryLength = country.length;
console.log(`Before trim : ${country}, Length: ${countryLength}`);
var trimCountryResult = country.trimStart();
var trimLength = trimCountryResult.length;
console.log(`After trimStart : ${trimCountryResult}, Length: ${trimLength}`);
var diff = countryLength - trimLength;
console.log(`Trim Start Length Difference: ${diff}`);

//COnversion of datatypes
//Integer to String
var age = 22;
console.log(`Age: ${age}, Data Type: ${typeof(age)}`);
var ageString = age.toString();
console.log(`Age: ${ageString}, Data Type: ${typeof(ageString)}`);

//Includes
var check = greet.includes("nin");
console.log(`Check if the string contains the word "nin": ${check}`);

//Slice
var greetSlice = greet.slice(2,6);
console.log(`Slice of the string: ${greetSlice}`);

//Split
var city = "I love Pune";
var citySplit = city.split(" ");
console.log(`Split the string: ${citySplit}`);
console.log(citySplit);

var str = "My inspiration is Ratan Tata Sir";
var strSplit = str.split(" ");
console.log(strSplit);
var strSplitCount = strSplit.length;
console.log(`Split the string: ${strSplit}, Count: ${strSplitCount}`);


