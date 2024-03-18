// Landing page login button event listeners

const loginButton = document.getElementById('landing-showlogin');
const memberSignin = document.getElementById('member-signin');


document.getElementById('action-button').addEventListener('click', function() {
  // Redirect to the desired view
  window.location.href = 'discussion'; // Change 'view.html' to the URL of your desired view/page
});

// Code to confirm password match

const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirm-password');
const signUpButton = document.getElementById('signup-button');

signUpButton.addEventListener('click', function() {
  if (password.value !== confirmPassword.value) {
    alert('Passwords do not match');
    return;
  }
})