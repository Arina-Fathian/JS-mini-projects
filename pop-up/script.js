const popUp = document.querySelector(".popup-container");
const popUpClose = document.querySelector(".svgimg");

// setTimeout(() => {
//   popUp.classList.add("active");
// }, 1000);
let isPopUpShow = true;

window.addEventListener("scroll", () => {
  if (window.scrollY > 300 && isPopUpShow == true) {
    popUp.classList.add("active");
    isPopUpShow = false;
  }
}),
  popUpClose.addEventListener("click", () => {
    popUp.classList.remove("active");
  });
