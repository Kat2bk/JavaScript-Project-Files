"use strict";

// this is the check button
const checkBtn = document.querySelector('.check-btn');
// adding a click event to grab the input value
checkBtn.addEventListener('click', () => {

   console.log('clicked', document.querySelector('.check').value)
})