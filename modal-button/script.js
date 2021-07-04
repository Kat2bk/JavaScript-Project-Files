'use strict';

// show modal button
const showButton = document.querySelector('.show-modal');
// button for exiting
const exitButton = document.querySelector('.close-modal');
// modal
const modal = document.querySelector('.modal');
// overlay
const overlay = document.querySelector('.overlay');

// if using querySelectorAll, use for loop for special events

showButton.addEventListener('click', () => {
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
})

