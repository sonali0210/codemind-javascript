function calculateSum() {
    // Get the values from the input fields
    // and parse them as floats
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    const sum = num1 + num2;
    document.getElementById('result').innerText = `The sum is: ${sum}`;

}