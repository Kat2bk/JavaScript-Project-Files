'use strict';

function diceRolling() {
    let audio = new Audio('./sounds/0004526.mp3');
    audio.play();
}

// pirate laugh
function pirateLaughing() {
    let audio = new Audio('./sounds/pirateLaugh.mp3');
    audio.play();
}

// pirate arrgh
function pirateGroan() {
    let audio = new Audio('./sounds/pirateArrgh.m4a');
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

// score elements
const scoreOne = document.querySelector('#score0');
const scoreTwo = document.querySelector('#score1');
const currentOne = document.querySelector('#current0');
const currentTwo = document.querySelector('#current1');
let currentScorePlayTwo = 0;
let currentScorePlayOne = 0;
// storing player scores in array

// dice - hidden - starting condition
const diceElement = document.querySelector('.dice');
// playerOne.classList.add('player-active');

// button elements
const btnNew = document.querySelector('.btn-new');
const btnRoll = document.querySelector('.btn-roll');
const btnHold = document.querySelector('.btn-hold');

// is game playing variable
let isPlaying
let activePlayer;
let scores;

const resetGame = () => {
    isPlaying = true;
    activePlayer = 0;
    scores = [0, 0];
    
    diceElement.classList.add('hidden');
    localStorage.clear();
    currentScorePlayOne = 0;
    currentScorePlayTwo = 0;
    currentTwo.textContent = 0;
    currentOne.textContent = 0;
    scoreOne.textContent = 0;
    scoreTwo.textContent = 0;
    active.style.backgroundColor = "";
    playerTwo.style.backgroundColor = "";
    document.getElementById('name0').textContent = "Player";
    document.getElementById('name1').textContent = "Pirate";
    btnRoll.classList.remove('disabledBtn');
    btnRoll.disabled = false;
    playerOne.classList.add('active-player');
    playerTwo.classList.remove('active-player');
}

resetGame();

function initMessage() {
    const input = document.getElementById('inputNumber').value;
    if (!input) {
        alert('Give meh yer wager, laddy!')
    } else if (input) {
        let alerted = localStorage.getItem('alerted') || '';
            if (alerted !== 'yes' && isPlaying) {
                alert("Aye, looser walks the plank!");
                localStorage.setItem('alerted','yes');
            }
    }
}

// for computer control rolling dice
  function computerRolling() {
        const count = [1, 2];
        const inputScore = document.getElementById('inputNumber').value;

    setTimeout(async () => {
        for (let i = 0; i < count.length; i++) {
            diceRolling();
            const diceRoll =  Math.trunc(Math.random() * 6) + 1;
            diceElement.dataset.side = diceRoll;
            diceElement.classList.toggle('reRoll');
            if (diceRoll !== 1) {
                currentScorePlayTwo += diceRoll;
                document.getElementById(`current${activePlayer}`).textContent = currentScorePlayTwo;
                scores[activePlayer] += currentScorePlayTwo;
                document.getElementById(`score${activePlayer}`).textContent = scores[activePlayer];
                    
            } else if (diceRoll === 1) {
                currentScorePlayTwo = 0;
                document.getElementById(`current${activePlayer}`).textContent = '☠️';
                break;
            }
            await new Promise(resolve => setTimeout(resolve, 1300));
        }

        if (Number(inputScore) && scores[activePlayer] >= Number(inputScore)) {
            pirateLaughing();
            isPlaying = false;
            diceElement.classList.add('hidden');
            playerTwo.style.backgroundColor = "rgb(255,215,0, 0.2)";
            document.getElementById(`name${activePlayer}`).textContent = "Winner!"
        } else {
            activePlayer = activePlayer === 1 ? 0 : 1;
            playerTwo.classList.toggle('player-active');
            playerOne.classList.toggle('player-active');
            btnRoll.disabled = false;
            btnRoll.classList.remove('disabledBtn');
        }

    }, 1000)
}

// button click to roll dice for user player
btnRoll.addEventListener('click', () => {
    // if (playerOne.className.includes('player-active')) {
    //     playerOne.appendChild(diceElement);
    // }

    if (isPlaying) {
        const dice = Math.trunc(Math.random() * 6) + 1;
        diceRolling();
            diceElement.classList.remove('hidden') 
            diceElement.dataset.side = dice;
            diceElement.classList.toggle('reRoll');
            if (dice !== 1) {
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
    }
})
console.log('player one', playerOne);
console.log('player two', playerTwo);
// button Hold for user
btnHold.addEventListener('click', (e) => {
    if (isPlaying) {
        initMessage();
        const inputScore = document.getElementById('inputNumber').value;
    // add score to scores array for player one
    scores[activePlayer] += currentScorePlayOne;
    // store score from array inside score for player  
    document.getElementById(`score${activePlayer}`).textContent = scores[activePlayer];
        if (Number(inputScore) && scores[activePlayer] >= Number(inputScore)) {
            isPlaying = false;
            pirateGroan();
            diceElement.classList.add('hidden');
            active.style.backgroundColor = "rgb(255,215,0, 0.2)";
            document.getElementById(`name${activePlayer}`).textContent = "Winner!"
        } else {
        currentScorePlayOne = 0;
        document.getElementById(`current${activePlayer}`).textContent ='☠️';
         activePlayer = activePlayer === 0 ? 1 : 0;
        playerOne.classList.toggle('player-active');
        playerTwo.classList.toggle('player-active');
        btnRoll.classList.add('disabledBtn');
        btnRoll.disabled = true;
        computerRolling();
        }
    }
})

// functionality for play music button
// window.addEventListener("DOMContentLoaded", () => {
//     let audio = new Audio('./sounds/Pirate%20Folk%20Music%20-%20The%20Captain%27s%20Parrot.mp3');
//     audio.volume = 0.2;
//     playMusicBtn.classList.add('vibrate');
//     audio.play();
// })

const audio = document.getElementById('myAudio');
// music play/pause btn
const playMusicBtn = document.querySelector('.playBtn');
let time = 0;
function playPause() {
    if (time == 0) {
        time = 1;
        playMusicBtn.classList.remove('vibrate');
        audio.pause();
    } else {
        time = 0;
        playMusicBtn.classList.add('vibrate');
        audio.play();
    }
}

// reset game
btnNew.addEventListener('click', resetGame);