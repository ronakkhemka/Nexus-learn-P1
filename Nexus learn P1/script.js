function validateLogin() {
    const username = document.getElementById('login-username').value;
    const password = document.getElementById('login-password').value;
    const loginPrompt = document.getElementById('login-prompt');

    // Simple validation (you may replace this with your authentication logic)
    if (username === 'user' && password === 'password') {
        showPrompt('Login successful!', 'success');
    } else {
        showPrompt('Invalid username or password. Please try again.', 'error');
    }
}

function showPrompt(message, type) {
    const loginPrompt = document.getElementById('login-prompt');
    loginPrompt.textContent = message;
    loginPrompt.className = `prompt ${type}`;
    loginPrompt.style.display = 'block';

    // Hide the prompt after a few seconds (adjust the timeout as needed)
    setTimeout(() => {
        loginPrompt.style.display = 'none';
    }, 3000);
}
