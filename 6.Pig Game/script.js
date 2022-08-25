//selecting elements
const player0 = document.querySelector('.player--0');
const player1 = document.querySelector('.player--1');
const score0 = document.querySelector('#score--0');
const score1 = document.getElementById('score--1');
const current0 = document.getElementById('current--0');
const current1 = document.getElementById('current--1');
const diceE1 = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const model = document.querySelector('.modal');
const closeModel = document.querySelector('.close-modal');
const overLay = document.querySelector('.overlay');
const h111 = document.getElementById('h111');
let currentScore, activeplayer, scores, playing;

let init = function () {
  currentScore = 0;
  activeplayer = 0;
  scores = [0, 0];
  playing = true;
  score0.textContent = 0;
  score1.textContent = 0;
  diceE1.classList.add('hidden');
  current0.textContent = 0;
  current1.textContent = 0;
  player0.classList.add('player--active');
  player1.classList.remove('player--active');
  player0.classList.remove('player--winner');
  player1.classList.remove('player--winner');
};
init();
let SwitchPlayer = function () {
  document.getElementById(`current--${activeplayer}`).textContent = 0;
  activeplayer = activeplayer === 0 ? 1 : 0;
  currentScore = 0;
  player0.classList.toggle('player--active');
  player1.classList.toggle('player--active');
};
let openM = function () {
  model.classList.remove('hidden');
  overLay.classList.remove('hidden');
};
let closeM = function () {
  model.classList.add('hidden');
  overLay.classList.add('hidden');
};
//starting condition

btnRoll.addEventListener('click', function () {
  if (playing) {
    //1.Generating the random dice roll
    const dice = Math.trunc(Math.random() * 6) + 1;
    console.log(dice);
    //2.display the dice
    diceE1.classList.remove('hidden');
    diceE1.src = `dice-${dice}.png`;
    //3.check the dice 1:if true then move to second player
    if (dice != 1) {
      //add dice Current Score
      currentScore += dice;
      document.getElementById(`current--${activeplayer}`).textContent =
        currentScore;
    } else {
      //switch to next player
      SwitchPlayer();
    }
  }
});
btnHold.addEventListener('click', function () {
  if (playing) {
    scores[activeplayer] += currentScore;
    document.getElementById(`score--${activeplayer}`).textContent =
      scores[activeplayer];
    if (scores[activeplayer] >= 20) {
      playing = false;
      h111.innerHTML = `<h1>Winner Player ${activeplayer + 1}😍</h1>`;

      openM();
      diceE1.classList.add('hidden');
      document
        .querySelector(`.player--${activeplayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activeplayer}`)
        .classList.remove('player--active');
    } else {
      SwitchPlayer();
    }
  }
});
btnNew.addEventListener('click', function () {
  init();
});
closeModel.addEventListener('click', closeM);
overLay.addEventListener('click', closeM);
document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !model.classList.contains('hidden')) {
    closeM();
  }
});
