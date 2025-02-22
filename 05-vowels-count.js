console.log(`========= Program to count vowels in a string =========`);


var fruit = 'JavaScript Love ';
var vowels = "aeiou";
for (let index = 0; index < fruit.length; index++) {
    var char = fruit.charAt(index);
    // if (element == 'a' || element == 'e' || element == 'i' || element == 'o' || element == 'u') {
    //     console.log(element);
    // }
    if (vowels.includes(char)) {
        console.log(char);
    }
}