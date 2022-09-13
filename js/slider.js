const next = document.querySelector(".next");
const back = document.querySelector(".back");
const slider = document.querySelector(".slider");

let sectionIndex = 0;
function nextslide() {
  sectionIndex = sectionIndex < 2 ? sectionIndex + 1 : 2;
  slider.style.transform = "translate(" + sectionIndex * -33.33 + "%)";
}
function backslide() {
  sectionIndex = sectionIndex < 1 ? 0 : sectionIndex - 1;
  slider.style.transform = "translate(" + sectionIndex * -33.33 + "%)";
}

next.addEventListener("click", nextslide);

back.addEventListener("click", backslide);


//collapsible content

