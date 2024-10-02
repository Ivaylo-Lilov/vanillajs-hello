/* eslint-disable */
import "bootstrap";
import "./style.css";

const who = ["The dog", "My grandma", "The mailman", "My bird"];
const action = ["ate", "peed", "crushed", "broke"];
const what = ["my homework", "my phone", "the car"];
const when = [
  "before the class",
  "when I was sleeping",
  "while I was exercising",
  "during my lunch",
  "while I was praying"
];

const getRandom = arra_y => Math.floor(Math.random() * arra_y.length);
const getValue = arra_y => arra_y[getRandom(arra_y)];
const generateExcuse = () =>
  `${getValue(who)} ${getValue(action)} ${getValue(what)} ${getValue(when)}`;

const excuse = document.querySelector("#excuse");

window.onload = function() {
  excuse.innerHTML = generateExcuse();
};
