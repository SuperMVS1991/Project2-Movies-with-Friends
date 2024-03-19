// Navigation links

/* const friendsLink = document.getElementById('nav-friends');

friendsLink.addEventListener('click', function() {
  // Redirect to the desired view
  window.location.href = 'friends'; // Change 'view.html' to the URL of your desired view/page
}
); */

// Landing page login button event listeners

const loginButton = document.getElementById('landing-showlogin');
const memberSignin = document.getElementById('member-signin');


loginButton.addEventListener('click', function() {
  memberSignin.classList.toggle('visible-form');
  console.log('clicked-member-login');
}
);

// Button to go to signup view

document.getElementById('signup-button').addEventListener('click', function() {
  // Redirect to the desired view
  window.location.href = 'signup'; // Change 'view.html' to the URL of your desired view/page
});

// Code to confirm password match

const password = document.getElementById('password-signup');
const confirmPassword = document.getElementById('confirm-password');
const signUpButton = document.getElementById('submit-signup');

signUpButton.addEventListener('click', function() {
  // Redirect to the desired view
  window.location.href = 'signup'; // Change 'view.html' to the URL of your desired view/page
});

const submitSignup = document.getElementById('submit-signup');

submitSignup.addEventListener('click', function() {
  if (password.value !== confirmPassword.value) {
    alert('Passwords do not match');

    return;
  }
})