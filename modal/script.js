const loginModal = document.querySelector(".login-modal");
const overlay = document.querySelector(".overlay");
const loginbutton = document.querySelector(".btn");
const closeModal = document.querySelector(".svgimg");

loginbutton.addEventListener("click", () => {
  loginModal.classList.add("active");
});

closeModal.addEventListener("click", () => {
  loginModal.classList.remove("active");
});

overlay.addEventListener("click", () => {
  loginModal.classList.remove("active");
});
