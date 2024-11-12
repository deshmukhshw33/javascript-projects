'use strict';

//const players = document.querySelectorAll('.player');
//const currentplayer = document.querySelectorAll('.current');
//console.log(players[0].querySelector('.score').textContent);
//console.log(currentplayer[0].querySelector('.current-lable').textContent);
const diceEL = document.querySelector('.dice');
diceEL.classList.add('hidden');

let playing = true;
document.querySelector('#score--0').textContent = 0;
document.querySelector('#score--1').textContent = 0;
const player1 = document.querySelector('.player--0');
const player2 = document.querySelector('.player--1');
let currentScore1 = Number(document.querySelector('#current--0').textContent);
let currentScore2 = Number(document.querySelector('#current--1').textContent);
let totalScore1 = Number(document.querySelector('#score--0').textContent);
let totalScore2 = Number(document.querySelector('#score--1').textContent);

//let currentScore = Number(document.querySelector('.current-score').textContent);
//console.log(Number(currentScore));

const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

// Rolling dice functionality
btnRoll.addEventListener('click', function () {
  if (playing) {
    const roll = Math.trunc(Math.random() * 6) + 1;
    console.log(roll);

    diceEL.classList.remove('hidden');
    diceEL.src = `dice-${roll}.png`;

    if (roll !== 1) {
      if (player1.classList.contains('player--active')) {
        currentScore1 = currentScore1 + roll;
        document.querySelector('#current--0').textContent = currentScore1;
      } else {
        currentScore2 = currentScore2 + roll;
        document.querySelector('#current--1').textContent = currentScore2;
      }
    } else {
      if (player1.classList.contains('player--active')) {
        currentScore1 = 0;
        document.querySelector('#current--0').textContent = 0;
        player1.classList.remove('player--active');
        player2.classList.add('player--active');
      } else {
        currentScore2 = 0;
        document.querySelector('#current--1').textContent = 0;
        player2.classList.remove('player--active');
        player1.classList.add('player--active');
      }
    }
  }
});

// Hold button press functionality
btnHold.addEventListener('click', function () {
  if (playing) {
    if (player1.classList.contains('player--active')) {
      totalScore1 = currentScore1 + totalScore1;
      currentScore1 = 0;
      document.querySelector('#score--0').textContent = totalScore1;
      document.querySelector('#current--0').textContent = 0;
      if (totalScore1 >= 100) {
        player1.classList.add('player--winner');
        player1.classList.add('player--active');
        playing = false;
        diceEL.classList.add('hidden');
      } else {
        player1.classList.remove('player--active');
        player2.classList.add('player--active');
      }
    } else {
      totalScore2 = currentScore2 + totalScore2;
      currentScore2 = 0;
      document.querySelector('#score--1').textContent = totalScore2;
      document.querySelector('#current--1').textContent = 0;
      if (totalScore2 >= 100) {
        player2.classList.add('player--winner');
        player2.classList.add('player--active');
        playing = false;
        diceEL.classList.add('hidden');
      } else {
        player2.classList.remove('player--active');
        player1.classList.add('player--active');
      }
    }
  }
});
