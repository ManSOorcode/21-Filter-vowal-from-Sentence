"use strict";

let btn = document.querySelector(".action_button");

let sentence = document.querySelector(".contents");

const counter = document.querySelector(".count");

const character = document.querySelector(".character");

const textScreen = document.querySelector(".contents");
const boxScreen = document.querySelector(".box_1");

let vow = ["a", "e", "i", "o", "u"];

const vowalFinder = () => {
  const value = sentence.value;
  if (value === "") return "";
  const result = value
    .toLowerCase()
    .split("")
    .filter((el, i, arr) => vow.includes(el)).length;

  counter.innerHTML = result;

  counter.style.backgroundColor = "yellow";
  console.log(textScreen.value);
};

const clearText = () => {
  if (textScreen.value === "") return "";
  textScreen.value = ""; // Clear the text area
  counter.innerHTML = "0"; // Reset the counter to 0
  counter.style.backgroundColor = "rgb(3, 249, 249)";
};

btn.addEventListener("click", vowalFinder);

//when we click on text screen text will get remove and counter reset to zero
boxScreen.addEventListener("click", clearText);
