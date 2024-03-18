// Landing page login button event listeners

const loginButton = document.getElementById('landing-showlogin');
const memberSignin = document.getElementById('member-signin');
const SignupButton = document.getElementById('signupBtn');

loginButton.addEventListener('click', function() {
  memberSignin.classList.toggle('visible-form');
  console.log('clicked-member-login');
}
);

document.getElementById('signupBtn').addEventListener('click', function() {
  // Redirect to the Handlebars view URL
  window.location.href = '';
});