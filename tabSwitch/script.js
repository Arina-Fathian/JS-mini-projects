const btns = document.querySelectorAll(".btn");
const contents = document.querySelectorAll(".content");

btns.forEach((btn) => {
  btn.addEventListener("click", () => {
    btns.forEach((btn) => {
      btn.classList.remove("active");
    });
    contents.forEach((content) => {
      content.classList.remove("active");

      if (
        btn.getAttribute("data-btn") === content.getAttribute("data-content")
      ) {
        content.classList.add("active");
      }
    });
    btn.classList.add("active");
  });
});
