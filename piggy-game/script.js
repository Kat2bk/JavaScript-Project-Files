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

// score elements
const scoreOne = document.querySelector('#score0');
const scoreTwo = document.querySelector('#score1');

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
})

// computer rolling 1 - 6

