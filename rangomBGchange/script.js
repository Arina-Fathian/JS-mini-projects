const changeBtn = document.querySelector(".change-color");
const colorCode = document.querySelector(".color-code");

// function rgbColor() {
//   const randomr = Math.floor(Math.random() * (255 + 1));
//   const randomg = Math.floor(Math.random() * (255 + 1));
//   const randomb = Math.floor(Math.random() * (255 + 1));

//   return `rgb(${randomr},${randomg},${randomb})`;
// }

function randomColorCode() {
  const color = [];
  for (let i = 0; i < 3; i++) {
    const random = Math.floor(Math.random() * (255 + 1));
    color.push(random);
  }
  return `rgb(${color[0]},${color[1]},${color[2]})`;
}

changeBtn.addEventListener("click", () => {
  document.body.style.background = randomColorCode();
  colorCode.innerText = randomColorCode();
});
