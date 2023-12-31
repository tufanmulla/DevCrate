// When User Click On The #searchIcon ID Then The #navigationBar Hide And #search Bar Shown
let navigationBar = document.querySelector("#navigationBar");
let headerPart3 = document.querySelector("#headerPart3");
let search = document.querySelector("#search");
let searchIcon = document.querySelector("#searchIcon");

searchIcon.addEventListener("click", (event) => {
  event.stopPropagation();
  if (search.classList.contains("hidden")) {
    search.classList.remove("hidden");
    search.focus();
    navigationBar.classList.add("hidden");
    headerPart3.classList.remove("col-start-9");
    headerPart3.classList.add("col-start-6");
  }
});

document.addEventListener("click", (event) => {
  if (
    !event.target.closest("#searhIcon") &&
    !event.target.closest("#search") &&
    navigationBar.classList.contains("hidden") &&
    !search.classList.contains("hidden")
  ) {
    search.classList.add("hidden");
    navigationBar.classList.remove("hidden");
    headerPart3.classList.remove("col-start-6");
    headerPart3.classList.add("col-start-9");
  }
});
