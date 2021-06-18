"use strict";

// sound effect for wrong input
function nope() {
    let audio = new Audio("death.mp3");
    audio.play();
}

// need to compare this number to a randomly generated number

// this is the check button
const checkBtn = document.querySelector('.check-btn');
// this is the message that displays for user input
const message = document.querySelector('.guess');

// adding a click event to grab the input value
checkBtn.addEventListener('click', () => {
    // input will always be a string, need to convert to a number
   const number = Number(document.querySelector('.check').value);
   if (!number) {
    // need to check if there is a value inside the input
    nope();
    message.textContent = "No number!"
   } else if (number > 20) {
       nope();
       message.textContent = "Enter a valid number"
   }
})