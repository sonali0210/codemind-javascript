function stringHandsOn() {
    console.log("========= STEP 1 =========")
    var string = "   Hey you are doing good, keep it up   ";
    console.log(`The string is: ${string}`);
    
    console.log("========= STEP 2 =========")
    var length = string.length;
    console.log(`The length of the string is: ${length}`);

    console.log("========= STEP 3 =========")
    var trim = string.trim();
    console.log(`The trimmed string is: ${trim}`);
    var trimLength = trim.length;
    console.log(`The length of the trimmed string is: ${trimLength}`);

    console.log("========= STEP 4 =========")
    var extraSpaces = length - trimLength;
    console.log(`The number of extra spaces in the string is: ${extraSpaces}`);

    console.log("========= STEP 5 =========")
    var firstChar = trim.charAt(0);
    var lastChar = trim.charAt(trimLength-1);
    console.log(`The first and last character of the string are : ${firstChar} and ${lastChar}`);

    console.log("========= STEP 6 =========")
    var splitString = trim.split(" ");
    var wordCount = splitString.length;
    console.log(`The number of words in the string is: ${wordCount}`);

    console.log("========= STEP 7 =========")
    var index = string.indexOf("good");
    console.log(`The index of the word "good" in the string is: ${index}`);

    console.log("========= STEP 8 =========")
    var substr = string.substring(22,length-1);
    console.log(`The substring from index 22 to the end of the string is: ${substr}`);

    console.log("========= STEP 9 =========")
    var end = trim.endsWith("up");
    console.log(`The string ends with "up": ${end}`);

    console.log("========= STEP 10 =========")
    var start = trim.startsWith("Hey");
    console.log(`The string starts with "Hey": ${start}`);

}

stringHandsOn();