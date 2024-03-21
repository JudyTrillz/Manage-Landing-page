const btn = document.getElementById("menu-btn");
const nav = document.getElementById("mobile-nav");

btn.addEventListener("click", () => {
  btn.classList.toggle("open");
  nav.classList.toggle("flex");
  nav.classList.toggle("hidden");
});

// COPYRIGHT DATE =====>>
const date = new Date();
const presentYear = date.getFullYear();
const yearsOnScreen = document.querySelectorAll("#year");
console.log(yearsOnScreen);

yearsOnScreen.forEach((yearOnScreen) => {
  yearOnScreen.innerHTML = presentYear;
});
