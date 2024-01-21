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
  }
});

// Section Three JavaScript
let layers = document.querySelectorAll("#layer");
let layerText = document.querySelectorAll("#layerText");
let layerButtons = document.querySelectorAll("#layerButton");
let clickAbleButton = document.querySelectorAll(".clickAbleButton");

// When user navigating between Build Run And Share then hide and show the layer and toggling the text color of layerButton
layerButtons.forEach((button, buttonIndex) => {
  button.addEventListener("click", (event) => {
    // hide and show the layerButton of  borderBottom
    if (!button.classList.contains("borderBottom")) {
      clickAbleButton.forEach((buttons) => {
        buttons.classList.remove("borderBottom");
      });
      button.classList.add("borderBottom");
    }

    layers.forEach((layer, layerIndex) => {
      if (buttonIndex === layerIndex) {
        layer.classList.remove("scale-0");

        // toggling the color of text
        layerText.forEach((text, textIndex) => {
          if (buttonIndex === textIndex) {
            text.classList.remove("text-[#2A446B]");
            text.style.color = "red";
          } else {
            text.classList.add("text-[#2A446B]");
            text.style.color = "";
          }
        });
      } else {
        layer.classList.add("scale-0");
      }
    });
  });
});

// Back to top button
// Get the button:
let backToTopButton = document.getElementById("backToTopButton");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    backToTopButton.style.display = "block";
  } else {
    backToTopButton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
