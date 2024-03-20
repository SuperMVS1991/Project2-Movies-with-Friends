// Navigation links

/* const friendsLink = document.getElementById('nav-friends');

friendsLink.addEventListener('click', function() {
  // Redirect to the desired view
  window.location.href = 'friends'; // Change 'view.html' to the URL of your desired view/page
}
); */

// Landing page Sign In

const showSignInForm = document.getElementById("landing-showlogin");
const signInMember = document.getElementById("signin-member");

showSignInForm.addEventListener("click", function () {
  console.log("clicked show sign in form button");
signInMember.classList.toggle("visible-form");
  console.log("sign in form is now visible");
});

// Landing page Sign Up

const showSignUpForm = document.getElementById("landing-showsignup");
const signUpNewUser = document.getElementById("signup-newuser");


showSignUpForm.addEventListener("click", function () {
  console.log("clicked show sign up form button");
signUpNewUser.classList.toggle("visible-form");
  console.log("sign up form is now visible");
});

// Toggle form visibility

function toggleForm(signInMember, signUpNewUser) {
  if (signInMember.classList.contains("visible-form") && signUpNewUser.classList.contains("visible-form")) {
    signInMember.classList.remove("visible-form");
  } else {
    signInMember.classList.toggle("visible-form");
    signUpNewUser.classList.toggle("visible-form");
  }
}

// Code to confirm password match

const submitSignup = document.getElementById("submit-signup");

submitSignup.addEventListener("click", function () {
  if (password.value !== confirmPassword.value) {
    alert("Passwords do not match");

    return;
  }
});

//prevent user from selecting more than 5 movies to nominate

window.onload = function () {
  let checkboxes = document.querySelectorAll('input[type="checkbox"]');
  checkboxes.forEach(function (checkbox) {
    checkbox.addEventListener("change", function () {
      let checkedCount = Array.from(checkboxes).filter((i) => i.checked).length;
      if (checkedCount > 5) {
        this.checked = false;
        alert("You can only select 5 movies.");
      }
    });
  });
};
