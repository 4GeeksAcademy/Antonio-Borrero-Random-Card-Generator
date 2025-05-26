import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";
import { jsx } from "react/jsx-runtime";

const card = document.querySelector(".card");
  const numbers = ["A",2,3,4,5,6,7,8,9,10,"J","Q","K"]

window.onload = function() {
  //write your code here
  let number = document.createElement("P");
  number.innerHTML = numbers[2];
  number.className = "number"
  card.appendChild(number)
};
