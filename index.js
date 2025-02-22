const listBtn = document.getElementById("list-button");
const listCloseBtn = document.querySelector(".close-button");
const secondNav = document.querySelector(".second-nav");

window.addEventListener("resize", () => {
  if (window.innerWidth > 767) {
    secondNav.style.display = "none";
    document.body.style.overflow = "auto";
  }
});

listBtn.addEventListener("click", () => {
  secondNav.style.display = "block";
  document.body.style.overflow = "hidden";
});

listCloseBtn.addEventListener("click", () => {
  secondNav.style.display = "none";
  document.body.style.overflow = "auto";
});
