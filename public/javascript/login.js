// Purpose: To handle the login and signup forms

// Sign up form handler for signup.handlebars

async function signupFormHandler(event) {
  event.preventDefault();
  const first_name = document.querySelector("#first_name").value.trim();
  const last_name = document.querySelector("#last_name").value.trim();
  const username = document.querySelector("#user_name").value.trim();
  const email = document.querySelector("#email-signup").value.trim();
  const password = document.querySelector("#password-signup").value.trim();
  console.log(username, email, password, first_name, last_name);
  if (email && password) {
    const response = await fetch("/api/users", {
      method: "post",
      body: JSON.stringify({
        username,
        email,
        password,
        first_name,
        last_name,
      }),
      headers: { "Content-Type": "application/json" },
    });
    // check the response status
    if (response.ok) {
      console.log("success");
    } else {
      alert(response.statusText);
    }
  }
}

// Sign in form handler for landing.handlebars hidden form (id="member-signin")
function showlogin() {
  const memberSignin = document.getElementById("signin-member");
  memberSignin.classList.toggle("visible-form");
  const loginButton = document.getElementById("landing-signin");
  loginButton.addEventListener("click", loginFormHandler);
}

async function loginFormHandler(event) {
  event.preventDefault();
  console.log("loginFormHandler");

  const email = document.querySelector("#email-login").value.trim();
  const password = document.querySelector("#password-login").value.trim();

  if (email && password) {
    console.log(email, password);
    const response = await fetch("api/users/login", {
      method: "post",
      body: JSON.stringify({
        email,
        password,
      }),
      headers: { "Content-Type": "application/json" },
    });
    console.log(response);
    if (response.ok) {
      console.log("success");
      document.location.replace("/welcome");
    } else {
      alert(response.statusText);
    }
  }
}

document
  .querySelector("#landing-showlogin")
  .addEventListener("click", showlogin);

// Landing page Sign Up

const showSignUpForm = document.getElementById("landing-showsignup");
const signUpNewUser = document.getElementById("signup-newuser");
const signupButton = document.getElementById("submit-signup");

showSignUpForm.addEventListener("click", function () {
  signUpNewUser.classList.toggle("visible-form");
});

signupButton.addEventListener("click", signupFormHandler);
// Toggle form visibility

function toggleForm(signInMember, signUpNewUser) {
  if (
    signInMember.classList.contains("visible-form") &&
    signUpNewUser.classList.contains("visible-form")
  ) {
    signInMember.classList.remove("visible-form");
  } else {
    signInMember.classList.toggle("visible-form");
    signUpNewUser.classList.toggle("visible-form");
  }
}
