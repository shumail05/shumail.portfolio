var loader = document.getElementById("loading");
var assets = document.getElementById("assets");

function loadingFunction() {
  assets.style.display = "none";
  loader.style.display = "none";
}

// Project's Link Begin

const Project1 = document.getElementById("Ghost-Feedback");
Project1.addEventListener("click", function () {
  window.open("https://ghost-feedback-eight.vercel.app/", "_blank");
});

const Project2 = document.getElementById("Curvy-Shurvy");
Project2.addEventListener("click", function () {
  window.open("https://curvy-shurvy.vercel.app/", "_blank");
});

// Project's Link End

const Salesforce = document.getElementById("SalesforceLink");
Salesforce.addEventListener("click", function () {
  window.open("https://trailblazer.me/id/mayurdhwaj", "_blank");
});

// Certificate Link Begin

const C1 = document.getElementById("Certificate1");
C1.addEventListener("click", function () {
  window.open(
    "https://www.credly.com/badges/27e8c1a8-44aa-41c9-9267-24d05b8c2771/linked_in_profile",
    "_blank"
  );
});

const C2 = document.getElementById("Certificate2");
C2.addEventListener("click", function () {
  window.open("https://www.hackerrank.com/certificates/b3f7c1afbd49", "_blank");
});

const C3 = document.getElementById("Certificate3");
C3.addEventListener("click", function () {
  window.open("https://www.hackerrank.com/certificates/254c83624321", "_blank");
});

const C4 = document.getElementById("Certificate4");
C4.addEventListener("click", function () {
  window.open("https://www.hackerrank.com/certificates/f68e13f83dfe", "_blank");
});

const C5 = document.getElementById("Certificate5");
C5.addEventListener("click", function () {
  window.open("https://www.hackerrank.com/certificates/575d0bc16aa5", "_blank");
});

// Certificate Link End
