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

async function loginFormHandler(event) {
  event.preventDefault();

  const email = document.querySelector("#email-login").value.trim();
  const password = document.querySelector("#password-login").value.trim();

  if (email && password) {
    const response = await fetch("controllers/api/userRoutes.js", {
      method: "post",
      body: JSON.stringify({
        email,
        password,
      }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      userLoggedIn = true;
      window.location.href = "welcome";
    } else {
      alert(response.statusText);
    }
  }
}

document
  .querySelector(".login-form")
  .addEventListener("submit", loginFormHandler);
document
  .querySelector(".signup-form")
  .addEventListener("submit", signupFormHandler);

document.getElementById("btn").addEventListener("click", function () {
  // Redirect to the desired view
  window.location.href = "/"; // Change 'view.html' to the URL of your desired view/page
});
