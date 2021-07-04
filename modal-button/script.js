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
    // modal.style.display = 'block' also works but it is
    // more complicated
})

const closeModel = () => {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
}

exitButton.addEventListener('click', closeModel)
overlay.addEventListener('click', closeModel)

// esc key
document.addEventListener('keydown', (event) => {
    // console.log(event.key)
    if (event.key === "Escape") {
        if (!modal.classList.contains('hidden')) {
            closeModel()
        }
    }
})

