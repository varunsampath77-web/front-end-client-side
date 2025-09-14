document.addEventListener("DOMContentLoaded", function () {
  const forgotForm = document.getElementById("forgotForm");
  const errorMsg = document.getElementById("error-message");
  const toast = document.getElementById("toast");

  if (forgotForm) {
    forgotForm.addEventListener("submit", function (e) {
      e.preventDefault();

      const newPassword = document.getElementById("new-password").value.trim();
      const confirmPassword = document.getElementById("confirm-password").value.trim();

      if (newPassword === "" || confirmPassword === "") {
        errorMsg.textContent = "Please fill in both password fields.";
        return;
      }

      if (newPassword !== confirmPassword) {
        errorMsg.textContent = "Both passwords should match.";
        return;
      }

      // Clear error
      errorMsg.textContent = "";

      // Show toast
      showToast("Password reset successful!");

      setTimeout(() => {
        toast.classList.remove("show");
        forgotForm.reset();
        window.location.href = "login.html";
      }, 3000);
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
