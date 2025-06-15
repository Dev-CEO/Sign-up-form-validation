const signupBtn = document.getElementById("signupBtn");
const loginBtn = document.getElementById("loginBtn");

let userData = {};

signupBtn.addEventListener("click", () => {
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();
  const age = document.getElementById("age").value.trim();
  const gender = document.getElementById("gender").value.trim();
  const location = document.getElementById("location").value.trim();
  const blood = document.getElementById("blood").value.trim();
  const agree = document.getElementById("agree").checked;

  // Clear previous errors
  document.querySelectorAll(".error").forEach(el => el.textContent = "");

  let hasError = false;

  if (!name) {
    document.getElementById("nameError").textContent = "Full name is required.";
    hasError = true;
  }

  if (!email) {
    document.getElementById("emailError").textContent = "Email is required.";
    hasError = true;
  } else if (!email.endsWith("@gmail.com")) {
    document.getElementById("emailError").textContent = "Only @gmail.com is accepted.";
    hasError = true;
  }

  if (!password) {
    document.getElementById("passwordError").textContent = "Password is required.";
    hasError = true;
  } else if (password.length < 10) {
    document.getElementById("passwordError").textContent = "Password must be at least 10 characters.";
    hasError = true;
  }

  if (!age) {
    document.getElementById("ageError").textContent = "Age is required.";
    hasError = true;
  }

  if (!gender) {
    document.getElementById("genderError").textContent = "Gender is required.";
    hasError = true;
  }

  if (!location) {
    document.getElementById("locationError").textContent = "Location is required.";
    hasError = true;
  }

  if (!blood) {
    document.getElementById("bloodError").textContent = "Blood type is required.";
    hasError = true;
  }

  if (!agree) {
    document.getElementById("agreeError").textContent = "You must agree to the terms.";
    hasError = true;
  }

  if (!hasError) {
    userData = { email, password };
    alert("Signup successful!");
  }
});

loginBtn.addEventListener("click", () => {
  const loginEmail = document.getElementById("loginEmail").value.trim();
  const loginPassword = document.getElementById("loginPassword").value.trim();

  document.getElementById("loginEmailError").textContent = "";
  document.getElementById("loginPasswordError").textContent = "";
  document.getElementById("loginGeneralError").textContent = "";

  if (!loginEmail) {
    document.getElementById("loginEmailError").textContent = "Email is required.";
    return;
  }

  if (!loginPassword) {
    document.getElementById("loginPasswordError").textContent = "Password is required.";
    return;
  }

  if (loginEmail === userData.email && loginPassword === userData.password) {
    alert("Login successful!");
  } else {
    document.getElementById("loginGeneralError").textContent = "Invalid email or password.";
  }
});
