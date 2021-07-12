'use strict';

function diceRolling() {
    let audio = new Audio('./sounds/0004526.mp3');
    audio.play();
}

// user rolls dice, generate random roll
// did user roll a one?
// if no, add roll to score, display score
// if yes, switch player
// user holds score, add currant score to total
// if score is greater than 100, user wins
// if not, switch player
// if user resets game, reset all score to 0
// set user 1 as starting

// players
const playerOne = document.querySelector('.player-one');
const playerTwo = document.querySelector('.player-two');
const active = document.querySelector('.player-active');
let activePlayer = 0;

// score elements
const scoreOne = document.querySelector('#score0');
const scoreTwo = document.querySelector('#score1');
const currentOne = document.querySelector('#current0');
const currentTwo = document.querySelector('#current1');
let currentScore = 0;
// storing player scores in array
const scores = [0, 0];

// dice - hidden - starting condition
const diceElement = document.querySelector('.dice');
diceElement.classList.add('hidden');

// button elements
const btnNew = document.querySelector('.btn-new');
const btnRoll = document.querySelector('.btn-roll');
const btnHold = document.querySelector('.btn-hold');


// rolling dice event 1 - 6
btnRoll.addEventListener('click', () => {
// generating random dice
const dice = Math.trunc(Math.random() * 6) + 1;
// display dice
diceRolling();
diceElement.classList.remove('hidden')
diceElement.src = `./dice/dice-${dice}.png`
// check for a one, if true, switch to next player
if (dice !== 1) {
    // add to current score
    currentScore += dice;
    currentOne.textContent = currentScore; // change later for active player
} else {

}
})

// computer rolling 1 - 6

