'use strict';

let random = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  checkValidNumber(guess);
});

document.querySelector('.again').addEventListener('click', function () {
  document.querySelector('.check').disabled = false;
  document.querySelector('body').className = '';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('.score').textContent = score = 20;
  random = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.message').textContent = 'Start guessing...';
});

function checkValidNumber(guess) {
  if (guess && guess > 0) {
    if (guess <= 20) {
      checkRandomNumber(guess);
    } else {
      document.querySelector('.message').textContent =
        'Please enter a number bwt 1 to 21';
    }
  } else {
    document.querySelector('.message').textContent =
      'Please enter a valid number';
  }
}

function checkRandomNumber(guess) {
  if (random === guess) {
    document.querySelector('.check').disabled = true;
    document.querySelector('body').className = 'color-green';
    document.querySelector('.number').textContent = random;
    document.querySelector('.highscore').textContent = highScore =
      score > highScore ? score : highScore;
    document.querySelector('.message').textContent =
      'Congralutions you got it right';
  } else {
    document.querySelector('.score').textContent = --score;
    document.querySelector('.message').textContent =
      random < guess ? 'Too high' : 'too low';
  }
}
