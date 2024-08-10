// Function to show the requested form and hide others
function showForm(formId) {
  document.getElementById("login-form").style.display = "none";
  document.getElementById("signup-form").style.display = "none";
  document.getElementById("forgot-password-form").style.display = "none";
  document.getElementById(formId).style.display = "block";
}

// Validation Logic for Login Form
document.getElementById("login").addEventListener("submit", function (event) {
  event.preventDefault();

  const email = document.getElementById("login-email").value;
  const password = document.getElementById("login-password").value;
  const errorMessages = document.createElement("div");
  const storedData = JSON.parse(localStorage.getItem("signupData") || "{}");

  errorMessages.innerHTML = "";
  let isValid = true;

  // Email regex to validate email format
  const emailRegex = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
  if (!emailRegex.test(email)) {
    isValid = false;
    errorMessages.innerHTML += "<p>Email is not valid.</p>";
  }

  if (password.length < 6) {
    isValid = false;
    errorMessages.innerHTML +=
      "<p>Password must be at least 6 characters long.</p>";
  }

  if (isValid) {
    if (email === storedData.email && password === storedData.password) {
      alert(`Login successful for email: ${email}`);
      window.location.href = "home.html";
    } else {
      errorMessages.innerHTML +=
        "<p>Invalid credentials. Please try again.</p>";
      this.appendChild(errorMessages);
    }
  } else {
    this.appendChild(errorMessages);
  }
});

// Validation Logic for Sign-Up Form
document.getElementById("signup").addEventListener("submit", function (event) {
  event.preventDefault();

  const name = document.getElementById("signup-name").value;
  const email = document.getElementById("signup-email").value;
  const password = document.getElementById("signup-password").value;
  const errorMessages = document.createElement("div");

  errorMessages.innerHTML = "";
  let isValid = true;

  // Email regex to validate email format
  const emailRegex = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
  if (!emailRegex.test(email)) {
    isValid = false;
    errorMessages.innerHTML += "<p>Email is not valid.</p>";
  }

  if (name.length < 3 || name.length > 20) {
    isValid = false;
    errorMessages.innerHTML +=
      "<p>Name must be between 3 and 20 characters.</p>";
  }

  if (password.length < 6) {
    isValid = false;
    errorMessages.innerHTML +=
      "<p>Password must be at least 6 characters long.</p>";
  }

  if (isValid) {
    localStorage.setItem(
      "signupData",
      JSON.stringify({ name, email, password })
    );
    alert(`Signup successful for name: ${name}`);
    showForm("login-form"); // Switch to login form after successful signup
  } else {
    this.appendChild(errorMessages);
  }
});

// Validation Logic for Forgot Password Form
document
  .getElementById("forgot-password")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const email = document.getElementById("forgot-email").value;
    const errorMessages = document.createElement("div");

    errorMessages.innerHTML = "";
    let isValid = true;

    // Email regex to validate email format
    const emailRegex = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
    if (!emailRegex.test(email)) {
      isValid = false;
      errorMessages.innerHTML += "<p>Email is not valid.</p>";
    }

    if (isValid) {
      alert(`Password reset requested for email: ${email}`);
      // Add further logic for password reset functionality if needed
    } else {
      this.appendChild(errorMessages);
    }
  });
