const hamburger = document.querySelector(".hamburger-button");
const bar1 = document.querySelector("#bar1");
const bar2 = document.querySelector("#bar2");
const bar3 = document.querySelector("#bar3");

const hamburgerSlider = document.querySelector(".hamburger-slider");

hamburger.addEventListener("click", function () {
  bar1.classList.toggle("one");
  bar2.classList.toggle("two");
  bar3.classList.toggle("three");
  hamburgerSlider.classList.toggle("openDrawer");
  hamburger.classList.toggle("crossButton-openDrawer");
});
