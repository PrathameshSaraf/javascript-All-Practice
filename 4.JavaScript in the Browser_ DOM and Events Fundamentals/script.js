/*
console.log('hello');
console.log(document.querySelector('.message').textContent);

document.querySelector('.message').textContent="Correct Number ";

document.querySelector('.guess').value='50';
console.log(document.querySelector('.guess').value);

document.querySelector('.number').textContent='3';
console.log(document.querySelector('.number').textContent);
*/
let Snumber = Math.trunc(Math.random() * 20 + 1);
let formessage = function (mes) {
  document.querySelector('.message').textContent = mes;
};
let score1 = Number(document.querySelector('.score').textContent);
let highScore = 0;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    formessage('No Number');
  } else if (guess === Snumber) {
    formessage('Correct number');
    document.querySelector('body').style.backgroundColor = 'rgb(73, 244, 5)';
    document.querySelector('.number').textContent = Snumber;
    if (score1 > highScore) {
      highScore = score1;
      document.querySelector('.highscore').textContent = highScore;
    }
  } else if (score1 > 1) {
    guess > Snumber ? formessage('High') : formessage('Low');
    score1 = score1 - 1;
    document.querySelector('.score').textContent = score1;
  } else {
    formessage('Lost Game😶');
  }
});
document.querySelector('.again').addEventListener('click', function () {
  formessage('Start Guessing ....');
  document.querySelector('body').style.backgroundColor = 'rgb(99, 165, 241)';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.score').textContent = '20';
  Snumber = Math.trunc(Math.random() * 20 + 1);
  document.querySelector('.guess').value = '';
});
