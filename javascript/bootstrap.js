/*
//Scrolls images
//auto scroll
let intervalRef;
function resetAutoScroll() {
  clearInterval(intervalRef);
  intervalRef = setInterval( slideRight, 3000);
}
//start scroll
resetAutoScroll();
*/

const body = document.querySelector('body');
const modeToggle = document.getElementById('mode-toggle');
const modeStatus = document.querySelector('.mode-status');
const main = document.querySelector('.main-text');

//cant figure out how to get the pages to stay dark

let mode;
mode = localStorage.getItem('mode');

function toggleMode() {
  body.classList.toggle('dark-mode');
  main.classList.toggle('main-dark-mode');
  
  if(body.classList.contains('dark-mode')){
    localStorage.setItem("mode", "dark");
  } else {
    localStorage.setItem("mode", null);
  }
}
modeToggle.addEventListener('click', toggleMode);

function toggledDark() {
  if (localStorage.getItem("mode") === "dark") {
    toggleMode();
  }
}