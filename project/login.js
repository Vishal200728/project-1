document.addEventListener("DOMContentLoaded", function () {
  const container = document.querySelector(".container");
  const registerBtn = document.querySelector(".register-bnt");
  const loginBtn = document.querySelector(".Login-bnt");

  if (registerBtn && loginBtn && container) {
    registerBtn.addEventListener("click", () => {
      container.classList.add("active");
    });

    loginBtn.addEventListener("click", () => {
      container.classList.remove("active");
    });
  }
});

