// What's your name?
let name = document.querySelector("#name");
let nameOut = document.querySelector("#nameOutput");

name.addEventListener("focus", function() {
  if (nameOut.innerHTML === "") {
    nameOut.innerHTML = "Hello there! What's your name?";
  }
});
name.addEventListener("blur", function() {
  if (name.value === "") {
    nameOut.innerHTML = "May I know your name ?";
  } else {
    nameOut.innerHTML = `Hi, ${name.value}!`;
  }
});
// Your age is...
let date = document.querySelector("#date");
let ageOut = document.querySelector("#ageOutput");

date.addEventListener("focus", function() {
  if (ageOut.innerHTML === "") {
    ageOut.innerHTML = "Lemme guess, your age is...";
  }
});
date.addEventListener("blur", function() {
  if (date.value === "") {
    ageOut.innerHTML = "Would you mind enter your name ?";
  } else {
    let now = new Date();
    let birthday = new Date(date.value);
    let age = now.getYear() - birthday.getYear();
    if (birthday.getMonth() > now.getMonth()) {
      age -= 1;
    }
    ageOutput.innerHTML = `Your age is ${age} years old!`;
  }
});

// Light or Dark Themes ?
var light = document.querySelector("#light");
var dark = document.querySelector("#dark");
var colorbox = document.querySelector("#themeOutput").parentNode.parentNode;
var themeOutput = document.querySelector("#themeOutput");

light.addEventListener("click", function() {
  colorbox.classList.remove("bg-dark", "text-white");
  colorbox.classList.add("bg-light", "text-black");
  themeOutput.innerHTML = "You chose Light Mode!";
});
dark.addEventListener("click", function() {
  colorbox.classList.remove("bg-light", "text-black");
  colorbox.classList.add("bg-dark", "text-white");
  themeOutput.innerHTML = "You chose Dark Mode!";
});

// Skills
const skillsInput = document.querySelector("#html").parentNode;
const skillsOutput = document.querySelector("#skillsOutput");
const html = document.querySelector("#html");
const css = document.querySelector("#css");
const javascript = document.querySelector("#javascript");

function toggleSkill(event) {
  const element = event.currentTarget;
  element.classList.remove("btn-danger");
  element.classList.add("btn-success");
  element.classList.add("mr-1");
  if (element.parentNode === skillsInput) {
    skillsOutput.appendChild(element);
  } else if (element.parentNode === skillsOutput) {
    skillsInput.appendChild(element);
  }
}
//Button red and green 
function makeRed(event) {
  const element = event.currentTarget;
  element.classList.remove("btn-success");
  element.classList.add("btn-danger");
}
function makeGreen(event) {
  const element = event.currentTarget;
  element.classList.remove("btn-danger");
  element.classList.add("btn-success");
}
for (skill of [html, css, javascript]) {
  skill.addEventListener("click", toggleSkill);
  skill.addEventListener("mouseenter", makeRed);
  skill.addEventListener("mouseleave", makeGreen);
}