'use strict';
document.querySelector('#score--0').textContent = 0;
document.querySelector('#score--1').textContent = 0;

let roll = 0;
let currentScore = 0;
let totalScore = 0;
const players = document.querySelectorAll('.player');
//let currentScore = players.querySelectorAll('.current');
//console.log(players[0].querySelector('.score').textContent);

const updateCurrentScore = function (player, score) {
  currentScore =
    Number(player.querySelector('.current-score').textContent) + score;
  player.querySelector('.current-score').textContent = currentScore;
};

const updateTotalScore = function (player) {
  currentScore = Number(player.querySelector('.current-score').textContent);
  totalScore =
    Number(player.querySelector('.score').textContent) + currentScore;
  currentScore = 0;
  player.querySelector('.score').textContent = totalScore;
  player.querySelector('.current-score').textContent = 0;
};

const activatePlayer = function (player) {
  player.classList.add('player--active');
};

const deactivatePlayer = function (player) {
  player.classList.remove('player--active');
};

document.querySelector('.btn--roll').addEventListener('click', function () {
  roll = Math.trunc(Math.random() * 6) + 1;

  console.log(roll);
  if (roll !== 1) {
    if (players[0].classList.contains('player--active')) {
      updateCurrentScore(players[0], roll);
    } else {
      updateCurrentScore(players[1], roll);
    }
  } else {
    if (players[0].classList.contains('player--active')) {
      currentScore = 0;
      players[0].querySelector('.current-score').textContent = 0;
      deactivatePlayer(players[0]);
      activatePlayer(players[1]);
    } else {
      currentScore = 0;
      players[1].querySelector('.current-score').textContent = 0;
      deactivatePlayer(players[1]);
      activatePlayer(players[0]);
    }
  }
});

document.querySelector('.btn--hold').addEventListener('click', function () {
  if (players[0].classList.contains('player--active')) {
    updateTotalScore(players[0]);
    deactivatePlayer(players[0]);
    activatePlayer(players[1]);
  } else {
    updateTotalScore(players[1]);
    deactivatePlayer(players[1]);
    activatePlayer(players[0]);
  }
});
