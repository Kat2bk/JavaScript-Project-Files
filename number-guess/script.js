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

// sound effect for winning
function youWin() {
    let audio = new Audio("continue.mp3");
    audio.play();
}

// need to compare user guess to a randomly generated number
let secretNumber = Math.trunc(Math.random()*20) + 1;

// this is the check button
const checkBtn = document.querySelector('.check-btn');
// this is the message that displays for user input
const message = document.querySelector('.guess');
//this is sonic the hedgehog
const sonic = document.querySelector('.sonic-foot');
// grabbing score from p element
const displayScore = document.querySelector('.score');
// grabbing highscore from second p element
const highscore = document.querySelector('.highscore');
// creating new score variable to mimic one on DOM
let score = 20;

// adding a click event to grab the input value
checkBtn.addEventListener('click', (e) => {
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
   } else if (number === secretNumber) {
       // if input is correct 
       youWin();
       message.textContent = 'Correct!'
        document.querySelector('body').classList.add('rainbow')
        // grabbing box to put generated number
    document.querySelector('.number').textContent = secretNumber;

   } else if (number > secretNumber) {
       // if guess is higher than secret number and lower score
       if (score > 1) {
        nope();
        message.textContent = "Too high!"
         score--;
        displayScore.textContent = score;
       } else {
           displayScore.textContent = 0;
           message.textContent = "You lost the game..."
       }
    
       
   } else if (number < secretNumber) {
       if (score > 1) {
        nope();
        message.textContent = "Too low!"
        score--;
        displayScore.textContent = score;
       } else {
           displayScore.textContent = 0;
           message.textContent = "You lost the game..."
       }
   }
})
    // for every valid input sonic will jump
    checkBtn.addEventListener('click', sonicJump)

    // sonic function
        function sonicJump() {
            const value = Number(document.querySelector('.check').value);
            const block = document.querySelector('.number');

            // if (!sonic.classList.contains("jumping")) {
                if (value === secretNumber) {
                    sonic.src = "ring.gif"
                } else if (value <= 20 && value) {
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



        // click event for again button
const againBtn = document.querySelector('.again');
againBtn.addEventListener('click', () => {
    // if (message.textContent === "Correct!") {
        // displayScore.textContent = 20;
        // resetting score
        score = 20;
        displayScore.textContent = score;
        // getting new randomized number
        secretNumber = Math.trunc(Math.random()*20) + 1;
        // resetting block to question mark
        document.querySelector('.number').textContent = "?"
        // resetting message
        message.textContent = "Start guessing..."
        // resetting sonic
        sonic.src = "sonic-impatient.gif"
        // erasing user input
        document.querySelector('.check').value = ""
        // setting to default background-color
        // document.querySelector('body').style.backgroundColor = "#f3e416"
        document.querySelector('body').classList.remove('rainbow')
       
        
})

