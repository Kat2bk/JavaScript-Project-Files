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
let currentScorePlayTwo = 0;
let currentScorePlayOne = 0;
// storing player scores in array
const scores = [0, 0];

// dice - hidden - starting condition
const diceElement = document.querySelector('.dice');
// diceElement.classList.add('hidden');
// playerOne.classList.add('player-active');

// button elements
const btnNew = document.querySelector('.btn-new');
const btnRoll = document.querySelector('.btn-roll');
const btnHold = document.querySelector('.btn-hold');
// btnRoll.disabled = false;

// for computer control rolling dice
  function computerRolling() {
        const count = [1, 2, 3];

    setTimeout(async () => {
        for (let i = 0; i < count.length; i++) {
            diceRolling();
            const diceRoll =  Math.trunc(Math.random() * 6) + 1;
            // diceElement.src = `./dice/dice-${diceRoll}.png` 
            // console.log('dice roll player two', diceRoll)
            diceElement.dataset.side = diceRoll;
            diceElement.classList.toggle('reRoll');
            if (diceRoll !== 1) {
                currentScorePlayTwo += diceRoll;
                document.getElementById(`current${activePlayer}`).textContent = currentScorePlayTwo;
            
            } else if (diceRoll === 1) {
                currentScorePlayTwo = 0;
                document.getElementById(`current${activePlayer}`).textContent = '☠️';
                break;
            }
            await new Promise(resolve => setTimeout(resolve, 1300));
        }

        activePlayer = activePlayer === 1 ? 0 : 1;
        playerTwo.classList.toggle('player-active');
        playerOne.classList.toggle('player-active');
        btnRoll.disabled = false;
        btnRoll.classList.remove('disabledBtn');
    }, 1000)
}

// button click to roll dice for user player
btnRoll.addEventListener('click', () => {
    // if (playerOne.className.includes('player-active')) {
    //     playerOne.appendChild(diceElement);
    // }
        const dice = Math.trunc(Math.random() * 6) + 1;
        diceRolling();
        diceElement.classList.remove('hidden')
        // diceElement.src = `./dice/dice-${dice}.png` 
        diceElement.dataset.side = dice;
        diceElement.classList.toggle('reRoll');
        if (dice !== 1) {
            console.log('player one dice roll', dice);
            currentScorePlayOne += dice;
             document.getElementById(`current${activePlayer}`).textContent = currentScorePlayOne;
        } else if (dice === 1) {
            currentScorePlayOne = 0;
             document.getElementById(`current${activePlayer}`).textContent ='☠️';
             activePlayer = activePlayer === 0 ? 1 : 0;
            playerOne.classList.toggle('player-active');
            playerTwo.classList.toggle('player-active');
            btnRoll.classList.add('disabledBtn');
            btnRoll.disabled = true;
            computerRolling();
      }
})