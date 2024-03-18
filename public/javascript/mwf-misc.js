// Landing page login button event listeners

const loginButton = document.getElementById('landing-showlogin');
const memberSignin = document.getElementById('member-signin');
const SignupButton = document.getElementById('signupBtn');

loginButton.addEventListener('click', function() {
  memberSignin.classList.toggle('visible-form');
  console.log('clicked-member-login');
}
);


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