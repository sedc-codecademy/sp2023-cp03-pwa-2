import { feature1Content } from "./renderFeature1.js";
import { feature1Js } from "./feature1.js";
import { feature4Content } from "./renderFeature4.js";
import {toggleContainerVisibility,showNextContainer,showPreviousContainer} from './feature4.js'
import { feature5Content } from "./renderFeature5.js";
import { renderCalendar } from "../src/renderCalendar.js";


// DOM elements
const navbar = document.querySelector(".navbar");
const dropdownBtn = document.querySelector(".dropdown-btn");
const dropdownMenu = document.querySelector(".dropdown-menu");
const sidebar = document.querySelector(".sidebar");
const mainContent = document.querySelector(".main-content");

// Define content for each feature
// Single feature html is intended to be written]pasted here `<h1>Work Session</h1> <p>This is the content for Work Session.</p>`
// For simplicity sake, please write the HTML code in .html file and paste it in your variable feature(1,2,3,4 or 5)Content
// Besides editing the html in your variable feature(1,2,3,4 or 5)Content, don`t touch anything

const feature2Content = `
  <h1>Statistics</h1>
  <p>This is the content for Statistics.</p>
`;
const feature3Content = `
  <h1>Reminders</h1>
  <p>This is the content for Reminders.</p>
`;


// Functions to render content
function renderFeature1() {
  mainContent.innerHTML = feature1Content;
}

function renderFeature2() {
  mainContent.innerHTML = feature2Content;
}

function renderFeature3() {
  mainContent.innerHTML = feature3Content;
}

function renderFeature4() {
  mainContent.innerHTML = feature4Content;
}
function renderFeature5() {
  mainContent.innerHTML = feature5Content;
  renderCalendar()
}

// Add event listeners to sidebar links
sidebar.addEventListener("click", function (event) {
  if (event.target.id === "feature1") {
    renderFeature1();
    feature1Js();
  } else if (event.target.id === "feature2") {
    renderFeature2();
  } else if (event.target.id === "feature3") {
    renderFeature3();
  } else if (event.target.id === "feature4") {
    renderFeature4();
 
    const containers = document.querySelectorAll('.container');
    let currentContainerIndex = 0;

    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');

    prevBtn.addEventListener('click', function () {
      showPreviousContainer(containers, currentContainerIndex);
    });

    nextBtn.addEventListener('click', function () {
      showNextContainer(containers, currentContainerIndex);
    });

    toggleContainerVisibility(containers, currentContainerIndex);
  } else if (event.target.id === "feature5") {
    renderFeature5();
  }
});

// Add event listener to dropdown button
dropdownBtn.addEventListener("click", function () {
  dropdownMenu.style.display = dropdownMenu.style.display === "block" ? "none" : "block";
});

// Add event listener to logout button
const logoutButton = document.getElementById("logout");
logoutButton.addEventListener("click", function () {
  // The logout code goes here
});
