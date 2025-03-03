// Get references to the form elements
const name = document.getElementById('name');
const password = document.getElementById('password');
const form = document.getElementById('form');
const errorElement = document.getElementById('error');

// Add an event listener to the form for the submit event
form.addEventListener('submit', (e) => {
    // Initialize an array to hold error messages
    let messages = [];

    // Check if the name input is empty
    if (name.value === '' || name.value == null) {
        messages.push('Name is required');
    }

    // Check if the password is too short
    if (password.value.length < 6) {
        messages.push('Password must be longer than 6 characters');
    }

    // Check if the password is too long
    if (password.value.length > 20) {
        messages.push('Password must be less than 20 characters');
    }

    // Check if the password is 'password'
    if (password.value === 'password') {
        messages.push('Password cannot be "password"');
    }

    // If there are any error messages, prevent form submission and display the errors
    if (messages.length > 0) {
        e.preventDefault();
        errorElement.innerText = messages.join(', ');
    }
});
