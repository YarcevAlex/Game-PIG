'use strict';

const score0 = document.querySelector('#score--0');
const score1 = document.querySelector('#score--1');
const current0Element = document.querySelector('#current--0');
const current1Element = document.querySelector('#current--1')
const diceElement = document.querySelector('.dice');
const btnRoll = document.querySelector('.btn--roll');
const btnNew = document.querySelector('.btn--new');
const btnHold = document.querySelector('.btn--hold');
const player0 = document.querySelector('.player--0')
const player1 = document.querySelector('.player--1')

score0.textContent = 0;
score1.textContent = 0;
const totalScore = [0,0];
let currentScore ;
let activePlayer;
let isPlaying;
const initGame = () => {
  totalScore;
  currentScore = 0;
  activePlayer = 0;
  isPlaying = true;
  diceElement.classList.add('hidden');
  score0.textContent = 0;
  score1.textContent = 0;
  current0Element.textContent = 0;
  current1Element.textContent = 0;
  player0.classList.remove('player--winner');
  player1.classList.remove('player--winner');
  player0.classList.remove('player--active');
  player1.classList.remove('player--active');
  player0.classList.add('player--active');
}

initGame();
const switchPlayer = function () {
  currentScore = 0;
  document.querySelector(`#current--${activePlayer}`).textContent = currentScore;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0.classList.toggle('player--active');
  player1.classList.toggle('player--active');
};

btnRoll.addEventListener('click', () => {
  if (isPlaying) {
    const diceNumber = Math.ceil(Math.random() * 6);

    diceElement.classList.remove('hidden');
    diceElement.src = `dice${diceNumber}.png`;

    if (diceNumber !== 1) {
      currentScore += diceNumber;
      document.querySelector(`#current--${activePlayer}`).textContent = currentScore;
    } else {
      switchPlayer();
    }
  }
});

btnHold.addEventListener('click', () => {
  if (isPlaying) {
    totalScore[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent = totalScore[activePlayer];
    if (totalScore[activePlayer] >= 101) {
      isPlaying = false;
      document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
      document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
      diceElement.classList.add('hidden');
    } else {
      switchPlayer();
    }
  }
});

btnNew.addEventListener('click', initGame);

