document.addEventListener("DOMContentLoaded", function () {
  const loginForm = document.getElementById("loginForm");
  const toast = document.getElementById("toast");

  if (loginForm) {
    loginForm.addEventListener("submit", function (e) {
      e.preventDefault();

      const email = document.getElementById("email").value.trim();
      const password = document.getElementById("password").value.trim();

      if (!email || !password) {
        showToast("Please fill in both email and password.");
        return;
      }

      const emailPattern = /^[^\s@]+@[^\s@]+\.[a-z]{2,}$/;
      if (!emailPattern.test(email)) {
        showToast("Please enter a valid email address.");
        return;
      }

      showToast("Login successful!");
      // Optionally redirect
      // setTimeout(() => window.location.href = "dashboard.html", 2000);
    });
  }

  function showToast(message) {
    if (!toast) return;

    toast.textContent = message;
    toast.classList.add("show");

    setTimeout(() => {
      toast.classList.remove("show");
    }, 3000);
  }
});
