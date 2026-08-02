document.addEventListener("DOMContentLoaded", () => {
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));

  if (!currentUser) {
    window.location.href = "index.html";
    return;
  }

  document.getElementById("username").textContent = currentUser.name;
  document.getElementById("name").textContent = currentUser.name;
  document.getElementById("email").textContent = currentUser.email;
  document.getElementById("userid").textContent = currentUser.id;

  const users = JSON.parse(localStorage.getItem("users")) || [];
  document.getElementById("usersCount").textContent = users.length;

  document.getElementById("today").textContent = new Date().toLocaleDateString(
    "en-GB",
  );

  const menuBtn = document.getElementById("menuBtn");
  const overlay = document.getElementById("overlay");
  const sidebar = document.querySelector(".sidebar");

  menuBtn.addEventListener("click", () => {
    sidebar.classList.toggle("open");
    overlay.classList.toggle("show");
  });

  overlay.addEventListener("click", () => {
    sidebar.classList.remove("open");
    overlay.classList.remove("show");
  });

  document.querySelectorAll(".sidebar ul li").forEach((li) => {
    li.addEventListener("click", () => {
      if (window.innerWidth <= 900) {
        sidebar.classList.remove("open");
        overlay.classList.remove("show");
      }
    });
  });

  const logoutBtn = document.getElementById("logoutBtn");
  const logoutModal = document.getElementById("logoutModal");
  const continueBtn = document.getElementById("continueBtn");

  logoutBtn.addEventListener("click", () => {
    logoutModal.classList.add("show");
  });

  continueBtn.addEventListener("click", () => {
    localStorage.removeItem("currentUser");
    window.location.href = "index.html";
  });
});
