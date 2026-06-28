// --- 1. Color Changing Button ---
const colorBtn = document.getElementById('color-btn');

colorBtn.addEventListener('click', function() {
    // Generate a random hex color code (e.g., #3E8A9F)
    const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0');
    // Apply it to the button's background
    this.style.backgroundColor = randomColor;
});


// --- 2. Time-Based Greeting Alert ---
const greetingBtn = document.getElementById('greeting-btn');

greetingBtn.addEventListener('click', function() {
    const currentHour = new Date().getHours(); // Gets the hour from 0 to 23
    let greetingMessage = '';

    if (currentHour < 12) {
        greetingMessage = 'Good morning!';
    } else if (currentHour < 18) {
        greetingMessage = 'Good afternoon!';
    } else {
        greetingMessage = 'Good evening!';
    }

    // Trigger the browser alert box
    alert(greetingMessage + ' Welcome to my Cognifyz project.');
});


// --- 3. Basic Calculator ---
const calcBtn = document.getElementById('calc-btn');
const resultBox = document.getElementById('calc-result');

calcBtn.addEventListener('click', function() {
    // Fetch values from inputs and convert them from strings to floating-point numbers
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);

    // Check if the user entered valid numbers
    if (isNaN(num1) || isNaN(num2)) {
        resultBox.textContent = 'Please enter valid numbers in both fields.';
        resultBox.style.color = '#ef4444'; // Red error text
        return;
    }

    // Calculate sum and display
    const sum = num1 + num2;
    resultBox.textContent = 'Result: ' + sum;
    resultBox.style.color = '#111827'; // Reset text color
});