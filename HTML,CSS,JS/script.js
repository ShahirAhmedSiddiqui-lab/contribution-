// =========================================
// UI ELEMENTS
// =========================================

const switchBtn = document.getElementById("switchBtn");

const panelTitle = document.getElementById("panelTitle");
const panelText = document.getElementById("panelText");

const loginPage = document.getElementById("loginForm");
const signupPage = document.getElementById("signupForm");

// =========================================
// SWITCH LOGIN / SIGNUP
// =========================================

let signupMode = false;

switchBtn.addEventListener("click", () => {
  signupMode = !signupMode;

  if (signupMode) {
    loginPage.classList.remove("active");
    loginPage.classList.add("hide");

    signupPage.classList.add("active");

    panelTitle.textContent = "Hello Friend!";
    panelText.textContent = "Create your account to get started.";

    switchBtn.textContent = "Login";
  } else {
    signupPage.classList.remove("active");

    loginPage.classList.remove("hide");
    loginPage.classList.add("active");

    panelTitle.textContent = "Welcome Back";
    panelText.textContent = "Login with your account to continue.";

    switchBtn.textContent = "Create Account";
  }
});

// =========================================
// PASSWORD TOGGLE
// =========================================

document.querySelectorAll(".toggle-password").forEach((toggle) => {
  toggle.addEventListener("click", () => {
    const input = toggle.parentElement.querySelector("input");
    const icon = toggle.querySelector("i");

    if (input.type === "password") {
      input.type = "text";

      icon.classList.replace("fa-eye", "fa-eye-slash");
    } else {
      input.type = "password";

      icon.classList.replace("fa-eye-slash", "fa-eye");
    }
  });
});

// =========================================
// RIPPLE EFFECT
// =========================================

document.querySelectorAll("button").forEach((button) => {
  button.addEventListener("click", function (e) {
    const ripple = document.createElement("span");

    ripple.className = "ripple";

    const rect = this.getBoundingClientRect();

    const size = Math.max(rect.width, rect.height);

    ripple.style.width = size + "px";
    ripple.style.height = size + "px";

    ripple.style.left = e.clientX - rect.left - size / 2 + "px";

    ripple.style.top = e.clientY - rect.top - size / 2 + "px";

    this.appendChild(ripple);

    setTimeout(() => ripple.remove(), 600);
  });
});

// =========================================
// CARD ANIMATION
// =========================================

window.addEventListener("load", () => {
  const card = document.querySelector(".container");

  card.style.opacity = "0";
  card.style.transform = "translateY(40px) scale(.95)";

  setTimeout(() => {
    card.style.transition = ".7s ease";

    card.style.opacity = "1";
    card.style.transform = "translateY(0) scale(1)";
  }, 100);
});

// =========================================
// TILT EFFECT
// =========================================

const card = document.querySelector(".container");

card.addEventListener("mousemove", (e) => {
  if (window.innerWidth < 900) return;

  const rect = card.getBoundingClientRect();

  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;

  const rotateX = -(y - rect.height / 2) / 40;
  const rotateY = (x - rect.width / 2) / 40;

  card.style.transform = `perspective(1200px)
        rotateX(${rotateX}deg)
        rotateY(${rotateY}deg)`;
});

card.addEventListener("mouseleave", () => {
  card.style.transform = "perspective(1200px) rotateX(0) rotateY(0)";
});

// =========================================
// PARALLAX BLOBS
// =========================================

const blob1 = document.querySelector(".blob1");
const blob2 = document.querySelector(".blob2");

document.addEventListener("mousemove", (e) => {
  if (window.innerWidth < 900) return;

  const x = e.clientX / window.innerWidth;
  const y = e.clientY / window.innerHeight;

  blob1.style.transform = `translate(${x * 20}px,${y * 20}px)`;

  blob2.style.transform = `translate(${-x * 20}px,${-y * 20}px)`;
});
