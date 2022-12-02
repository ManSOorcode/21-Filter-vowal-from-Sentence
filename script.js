"use strict";

let btn = document.querySelector(".button");

let sentence = document.querySelector(".contents");

const counter = document.querySelector(".count");
console.log(counter);
const character = document.querySelector(".character");

let vow = ["a", "e", "i", "o", "u"];

btn.addEventListener("click", function () {
	console.log(sentence.value);

	const value = sentence.value;
	const result = value
		.toLowerCase()
		.split("")
		.filter((el, i, arr) => vow.includes(el)).length;
	console.log(result);

	counter.innerHTML = result;
});
