"use strict";

// sound effect for wrong input
function nope() {
    let audio = new Audio("death.mp3");
    audio.play();
}

// sound effect for jump mechanic
function jumping() {
    let audio = new Audio("jump.mp3");
    audio.play();
}

// need to compare user guess to a randomly generated number
const randomNumber = Math.trunc(Math.random()*20) + 1;

// grabbing box to put generated number, which we will hide
document.querySelector('.number').textContent = randomNumber;

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
       // or if value is above stated range
       nope();
       message.textContent = "Enter a valid number"
   }
})


    const sonic = document.querySelector('.sonic-foot');

    // for every valid input sonic will jump
    checkBtn.addEventListener('click', sonicJump)


        function sonicJump() {
            const value = Number(document.querySelector('.check').value);
            const block = document.querySelector('.number');

            // if (!sonic.classList.contains("jumping")) {
                if (value <= 20 && value) {
                    jumping();
                    sonic.classList.add("jumping");
                    sonic.src = "sonic-jumping.gif"
                    block.classList.add("bounce");
                setTimeout(() => {
                    sonic.classList.remove("jumping");
                    block.classList.remove("bounce");
                    sonic.src = "sonic-impatient.gif"
                }, 500)
                }
            }
        // }
