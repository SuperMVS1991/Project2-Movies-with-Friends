const loginButton = document.getElementById('landing-showlogin');
const memberSignin = document.getElementById('member-signin');

loginButton.addEventListener('click', function() {
  memberSignin.classList.toggle('visible-form');
  console.log('clicked');
}
);


