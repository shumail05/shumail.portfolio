var loader = document.getElementById("loading");
var assets = document.getElementById("assets");

function loadingFunction() {
  assets.style.display = "none";
  loader.style.display = "none";
}

// Project's Link Begin

const Project1 = document.getElementById("Ghost-Feedback");
Project1.addEventListener("click", function () {
  window.open("https://ghost-love-feedback.vercel.app/", "_blank");
});

const Project2 = document.getElementById("Curvy-Shurvy");
Project2.addEventListener("click", function () {
  window.open("https://curvy-shurvy-alpha.vercel.app/", "_blank");
});

// Project's Link End

