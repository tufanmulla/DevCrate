// define a variable

let menuBar = document.querySelector("#menuBar");
let navigationBar = document.querySelector("#navigationBar");
let headerPart3 = document.querySelector("#headerPart3");
let search = document.querySelector("#search");
let searchIcon = document.querySelector("#searchIcon");

// when click on the #menuBar id then toggling the #navigationBar
menuBar.addEventListener("click", (event) => {
  if (navigationBar.classList.contains("scale-y-0")) {
    navigationBar.classList.remove("scale-y-0");
  } else {
    navigationBar.classList.add("scale-y-0");
  }
});
//when click on the (document) then add class scale-y-0 of the #navigationBar
document.addEventListener("click", (menuBarEvent) => {
  if (
    !menuBarEvent.target.closest("#menuBar") &&
    !menuBarEvent.target.closest("#navigationBar") &&
    !navigationBar.classList.contains("scale-y-0")
  ) {
    navigationBar.classList.add("scale-y-0");
  }
});

//when click #hierarchy-li then show the hieerarchy-Li-Div
let hierarchyLi = document.querySelectorAll("#hierarchy-li");
let hierarchyLiDiv = document.querySelectorAll("#hierarchy-li-div");
let hierarchyImg = document.querySelectorAll("#hierarchy-img");
hierarchyLi.forEach((li, liIndex) => {
  li.addEventListener("click", () => {
    hierarchyLiDiv.forEach((liDiv, liDivIndex) => {
      if (liIndex === liDivIndex) {
        liDiv.classList.remove("hidden");
        liDiv.classList.add("block");
      } else {
        liDiv.classList.add("hidden");
        liDiv.classList.remove("block");
      }
    });
    hierarchyImg.forEach((img, imgIndex) => {
      if (liIndex === imgIndex) {
        img.classList.add("rotate-180");
      } else {
        img.classList.remove("rotate-180");
      }
    });
  });
});

// When User Click On The #searchIcon ID Then The #navigationBar Hide And #search Bar Shown
// searchIcon.addEventListener("click", (event) => {

//   if (search.classList.contains("hidden")) {
//     search.classList.remove("hidden");
//     search.focus();
//     navigationBar.classList.add("hidden");
//   }
// });

// document.addEventListener("click", (event) => {
//   if (
//     !event.target.closest("#searhIcon") &&
//     !event.target.closest("#search") &&
//     navigationBar.classList.contains("hidden") &&
//     !search.classList.contains("hidden")
//   ) {
//     search.classList.add("hidden");
//     navigationBar.classList.remove("hidden");
//   }
// });

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
