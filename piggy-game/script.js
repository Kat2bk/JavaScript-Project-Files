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
// playerOne.classList.add('player-active');

// button elements
const btnNew = document.querySelector('.btn-new');
const btnRoll = document.querySelector('.btn-roll');
const btnHold = document.querySelector('.btn-hold');
// btnRoll.disabled = false;

// computer rolling 1 - 6
// function computerRolling() {
//     // let counter = 2;
//     if (document.getElementById(`current${activePlayer}`) === 1) {
//             diceRolling();
//             console.log('dice roll player two', diceRoll)
//             const diceRoll = Math.trunc(Math.random() * 6) + 1;
//             diceElement.src = `./dice/dice-${diceRoll}.png` 
//             if (diceRoll !== 1) {
//                 currentScore += diceRoll;
//                 document.getElementById(`current${activePlayer}`).textContent = currentScore;
//                 if (currentScore < diceRoll) {
//                     currentScore += diceRoll;
//                     document.getElementById(`current${activePlayer}`).textContent = currentScore;
//                 }
//                 activePlayer = activePlayer === 1 ? 0 : 1;
//                 playerTwo.classList.toggle('player-active');
//                 playerOne.classList.toggle('player-active');
//                 btnRoll.disabled = false;
//                 btnRoll.classList.remove('disabledBtn');
//             } else if (roll === 1) {
//                 document.getElementById(`current${activePlayer}`).textContent = '☠️';
//                 currentScore = 0;
//                 activePlayer = activePlayer === 1 ? 0 : 1;
//                 playerTwo.classList.toggle('player-active');
//                 playerOne.classList.toggle('player-active');
//                 btnRoll.disabled = false;
//                 btnRoll.classList.remove('disabledBtn');
//             }
//         }  
//     }

    function computerRolling() {
        const count = [1, 2, 3];
       setTimeout(() => {
       for (let i = 0; i < count.length; i++) {
              setTimeout(() => {
                  diceRolling();
                const diceRoll =  Math.trunc(Math.random() * 6) + 1;
                diceElement.src = `./dice/dice-${diceRoll}.png` 
            console.log('dice roll player two', diceRoll)
            if (diceRoll !== 1) {
                currentScore += diceRoll;
                document.getElementById(`current${activePlayer}`).textContent = currentScore;
                if (i == count.length - 1) {
                    // clearTimeout();
                    btnRoll.disabled = false;
                    btnRoll.classList.remove('disabledBtn');
                    activePlayer = activePlayer === 1 ? 0 : 1;
                    playerTwo.classList.toggle('player-active');
                    playerOne.classList.toggle('player-active');
                }
            } else if (diceRoll == 1) {
                clearTimeout();
                currentScore = 0;
                document.getElementById(`current${activePlayer}`).textContent = '☠️';
                activePlayer = activePlayer === 1 ? 0 : 1;
                playerTwo.classList.toggle('player-active');
                playerOne.classList.toggle('player-active');
                btnRoll.disabled = false;
                btnRoll.classList.remove('disabledBtn');
            }
              }, 1000 * i)
          }     
        }, 1000)
    }

    console.log('player two toggle', playerOne)
    console.log('player two toggle', playerTwo)

btnRoll.addEventListener('click', () => {
    if (playerOne.className.includes('player-active')) {
        const dice = Math.trunc(Math.random() * 6) + 1;
        diceRolling();
        diceElement.classList.remove('hidden')
        diceElement.src = `./dice/dice-${dice}.png` 
        if (dice !== 1) {
            currentScore += dice;
             document.getElementById(`current${activePlayer}`).textContent = currentScore;
        } else {
             document.getElementById(`current${activePlayer}`).textContent ='☠️';
             currentScore = 0;
             activePlayer = activePlayer === 0 ? 1 : 0;
            playerOne.classList.toggle('player-active');
            playerTwo.classList.toggle('player-active');
            btnRoll.classList.add('disabledBtn');
            btnRoll.disabled = true;
            computerRolling();
        }
    }
})