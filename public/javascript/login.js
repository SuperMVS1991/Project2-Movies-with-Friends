// Purpose: To handle the login and signup forms

// Sign up form handler for signup.handlebars

async function signupFormHandler(event) {
  event.preventDefault();

  const email = document.querySelector("#email-signup").value.trim();
  const password = document.querySelector("#password-signup").value.trim();
  console.log(username + email + password);
  if (email && password) {
    const response = await fetch("/api/users", {
      method: "post",
      body: JSON.stringify({
        username,
        email,
        password,
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
  const memberSignin = document.getElementById("member-signin");
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
    console.log(email, password)
    const response = await fetch("api/userRoutes/login", {
      method: "post",
      body: JSON.stringify({
        email,
        password,
      }),
      headers: { "Content-Type": "application/json" },
    });
console.log(response)
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
document
  .querySelector("#signup-button")
  .addEventListener("submit", signupFormHandler);

// document.getElementById("btn").addEventListener("click", function () {
//   // Redirect to the desired view
//   window.location.href = "/"; // Change 'view.html' to the URL of your desired view/page
// });
