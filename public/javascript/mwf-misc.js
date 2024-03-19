// Navigation links

/* const friendsLink = document.getElementById('nav-friends');

friendsLink.addEventListener('click', function() {
  // Redirect to the desired view
  window.location.href = 'friends'; // Change 'view.html' to the URL of your desired view/page
}
); */

// Landing page login button event listeners

const loginButton = document.getElementById("landing-showlogin");
const memberSignin = document.getElementById("member-signin");

loginButton.addEventListener("click", function () {
  console.log("clicked-login");
  memberSignin.classList.toggle("visible-form");
  console.log("clicked-member-login");
});

// Button to go to signup view

document.getElementById("signup-button").addEventListener("click", function () {
  // Redirect to the desired view
  const password = document.getElementById("password-signup");
  const confirmPassword = document.getElementById("confirm-password");

  window.location.href = "signup"; // Change 'view.html' to the URL of your desired view/page
  console.log("clicked-signup");
});

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
