const counterValue = document.querySelector(".counter-value");
const decrease = document.querySelector(".counter-decrease");
const reset = document.querySelector(".counter-reset");
const increase = document.querySelector(".counter-increase");

let count = 0;
function decreaseBtn() {
  if (count > 0) {
    count--;
    counterValue.textContent = count;
  } else alert("the value must be between 0-50");
}

function increaseBtn() {
  if (count < 50) {
    count++;
    counterValue.textContent = count;
  } else alert("the value must be between 0-50");
}

decrease.addEventListener("click", decreaseBtn);

increase.addEventListener("click", increaseBtn);
