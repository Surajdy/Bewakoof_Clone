//Verify.js

var randomNumber = localStorage.getItem("otp")
//   const form = document.getElementById('otp-form');
let submitbutton = document.getElementById("submitbtn")
  submitbutton.addEventListener('click', function(event) {
    // Prevent the form from submitting normally
    event.preventDefault();

    // Get the value of the code input field
    const codeInput = document.getElementById('otpcode');
    const enteredCode = codeInput.value;

    // Compare the entered code to the random number
    if (enteredCode !== randomNumber) {
      // If the code is wrong, display an error message
      alert('Please enter a valid OTP.');
    } else {
      // If the code is correct, redirect to signup.html
      window.location.href = 'index.html';
    }
  });




  const resendBtn = document.getElementById('resendotp');

// Attach click event listener to submit button
resendBtn.addEventListener('click', function() {
  // Generate a 4 digit random number
  const randomNumber = Math.floor(Math.random() * 9000) + 1000;
  localStorage.setItem("otp", (randomNumber));
  // Display an alert with the random number
  alert('Your OTP is: ' + randomNumber);

  // Attach click event listener to the alert
  window.addEventListener('click', function() {
    // Redirect to index.html when alert is clicked
    window.location.href = 'verify.html';
  });
});