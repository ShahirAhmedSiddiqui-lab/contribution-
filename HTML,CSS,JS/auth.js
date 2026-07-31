// ======================================
// AUTH ELEMENTS
// ======================================

const loginForm = document.getElementById("loginForm");
const signupForm = document.getElementById("signupForm");
const toast = document.getElementById("toast");

// ======================================
// Toast Notification
// ======================================

function showToast(message, success = true) {
  toast.innerText = message;

  toast.style.background = success ? "#22c55e" : "#ef4444";

  toast.classList.add("show");

  setTimeout(() => {
    toast.classList.remove("show");
  }, 3000);
}

// ======================================
// Password Toggle
// ======================================

document.querySelectorAll(".toggle-password").forEach((toggle) => {
  toggle.addEventListener("click", () => {
    const input = toggle.parentElement.querySelector("input");

    const icon = toggle.querySelector("i");

    if (input.type === "password") {
      input.type = "text";

      icon.classList.remove("fa-eye");

      icon.classList.add("fa-eye-slash");
    } else {
      input.type = "password";

      icon.classList.remove("fa-eye-slash");

      icon.classList.add("fa-eye");
    }
  });
});

// ======================================
// Email Validation
// ======================================

function validEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

// ======================================
// Password Strength
// ======================================

function strongPassword(password) {
  return password.length >= 8;
}

// ======================================
// Local Storage Users
// ======================================

function getUsers() {
  return JSON.parse(localStorage.getItem("users")) || [];
}

function saveUsers(users) {
  localStorage.setItem("users", JSON.stringify(users));
}

// ======================================
// Signup
// ======================================

signupForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const name = document.getElementById("signupName").value.trim();

  const email = document
    .getElementById("signupEmail")
    .value.trim()
    .toLowerCase();

  const password = document.getElementById("signupPassword").value;

  if (name === "") {
    showToast("Enter your name.", false);

    return;
  }

  if (!validEmail(email)) {
    showToast("Invalid email.", false);

    return;
  }

  if (!strongPassword(password)) {
    showToast("Password must contain at least 8 characters.", false);

    return;
  }

  const users = getUsers();

  const exists = users.find((user) => user.email === email);

  if (exists) {
    showToast("Email already exists.", false);

    return;
  }

  users.push({
    id: Date.now(),

    name,

    email,

    password,
  });

  saveUsers(users);

  showToast("Account created successfully!");

  signupForm.reset();

  switchBtn.click();
});

// ======================================
// Login
// ======================================

loginForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const email = document
    .getElementById("loginEmail")
    .value.trim()
    .toLowerCase();

  const password = document.getElementById("loginPassword").value;

  const users = getUsers();

  const user = users.find((u) => u.email === email && u.password === password);

  if (!user) {
    showToast("Incorrect email or password.", false);

    return;
  }

  localStorage.setItem("currentUser", JSON.stringify(user));

  if (document.getElementById("remember").checked) {
    localStorage.setItem("rememberMe", "true");
  } else {
    localStorage.removeItem("rememberMe");
  }

  showToast("Login successful!");

  setTimeout(() => {
    window.location.href = "dashboard.html";
  }, 1200);
});
