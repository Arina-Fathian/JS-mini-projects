const timeinHours = document.querySelector(".hours");
const timeinMinutes = document.querySelector(".minutes");
const timeinSeconds = document.querySelector(".seconds");

// console.log(timeinHours);

function updateClock() {
  const date = new Date();
  if (date.getHours() < 10) {
    timeinHours.innerText = `0${date.getHours()}`;
  } else {
    timeinHours.innerText = date.getHours();
  }
  if (date.getMinutes() < 10) {
    timeinMinutes.innerText = `0${date.getMinutes()}`;
  } else {
    timeinMinutes.innerText = date.getMinutes();
  }
  if (date.getSeconds() < 10) {
    timeinSeconds.innerText = `0${date.getSeconds()}`;
  } else {
    timeinSeconds.innerText = date.getSeconds();
  }
}
updateClock();
setInterval(updateClock, 1000);
