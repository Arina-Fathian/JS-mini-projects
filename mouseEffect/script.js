const cursur = document.querySelector(".cursur");
const buttons = document.querySelectorAll(".btn");
const main = document.querySelector(".main");

let x;
let y;
let scale = 1;
function transforming() {
  cursur.style.transform = `translate(${x}px,${y}px) scale(${scale})`;
}

window.addEventListener("mousemove", (event) => {
  x = event.clientX;
  y = event.clientY;
  transforming();
});

buttons.forEach((btn) => {
  btn.addEventListener("mouseenter", () => {
    scale = 4;
    cursur.classList.add("active");
  });
  btn.addEventListener("mouseleave", () => {
    scale = 1;
    cursur.classList.toggle("active");
  });
});
