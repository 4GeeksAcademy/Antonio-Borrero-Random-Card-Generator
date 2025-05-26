import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = card;

function card() {
  //write your code here
  const icons = {
    diamond: {
      text: "♦",
      class: "diamond"
    },
    heart: {
      text: "♥",
      class: "heart"
    },
    spade: {
      text: "♠",
      class: "spade"
    },
    club: {
      text: "♣",
      class: "club"
    }
  }


  const suitsElements = document.querySelectorAll(".suit");
  const keys = Object.keys(icons);
  const randomKey = keys[Math.floor(Math.random() * keys.length)];

  suitsElements.forEach(element => {
    element.innerHTML = icons[randomKey].text;
    element.classList.add(icons[randomKey].class);
  })


  const numbers = ["A", 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K"];

  const number = document.querySelector(".number");
  number.innerHTML = numbers[Math.floor(Math.random() * numbers.length)];
};

const button = document.querySelector(".button");
const pokerCard = document.querySelector(".card");
const inputWidth = document.querySelector(".inputWidth");
const inputHeight = document.querySelector(".inputHeight");

button.addEventListener("click", () => {
  card();

  const newWidth = inputWidth.value.trim();
  const newHeight = inputHeight.value.trim();

  if (newWidth !== "") {
    pokerCard.style.width = newWidth + "px";
  }
  if (newHeight !== "") {
    pokerCard.style.height = newHeight + "px";
  }
  if (newWidth === "" && newHeight === ""){
    pokerCard.style.width = "320px";
    pokerCard.style.height = "480px"
  }
})

inputWidth.addEventListener("keypress", (e) => {
  if (e.key === "Enter"){
    let newWidth = inputWidth.value.trim();
    if (newWidth !== ""){
      pokerCard.style.width = newWidth + "px";
    }
  }
})

inputHeight.addEventListener("keypress", (e) => {
  if (e.key === "Enter"){
    let newHeight = inputHeight.value.trim();
    if (newHeight !== ""){
      pokerCard.style.height = newHeight + "px";
    }
  }
})

setInterval(card, 10000);