document.getElementById('signupForm').addEventListener('submit', function(event) {
  event.preventDefault();

  const username = document.getElementById('username').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  // Simple form validation (example purposes only)
  if (username && email && password) {
    console.log('Username:', username);
    console.log('Email:', email);
    console.log('Password:', password);

    // Here, you would typically send the data to the server
    alert('Sign up successful!');
  } else {
    alert('Please fill in all fields.');
  }
});