// Create a counter

function incrementCounter() {
    const counterElement = document.getElementById('counter');
    const increment = document.getElementById('increment');
    const decrement = document.getElementById('decrement');
    const reset = document.getElementById('reset');

    let count = 0;
    increment.addEventListener('click', () => {
        // let count = parseInt(counterElement.innerText, 10);
        count += 1;
        counterElement.textContent = count;
    });

    decrement.addEventListener('click', () => {
        // let count = parseInt(counterElement.innerText, 10);
        if (count <= 0) {
            alert('Counter cannot be negative!');
            return;
        }
        count -= 1;
        counterElement.innerText = count;
    });

    reset.addEventListener('click', () => {
        counterElement.innerText = 0;
    });
}

incrementCounter();