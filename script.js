'use strict';
function init() {
  const button = document.querySelector('.check');
  const input = document.querySelector('.guess');
  const message = document.querySelector('.message');
  const number = document.querySelector('.number');
  const score = document.querySelector('.score');
  const highscore = document.querySelector('.highscore');
  const randomNumber = Math.trunc(Math.random() * 20 + 1);
  let counter = 20;
  let bestScore = 0;

  button.addEventListener('click', checkNumber);

  function checkNumber() {
    const guessingNumber = input.value;
    if (counter != 0) {
      if (guessingNumber <= 20 && guessingNumber >= 1) {
        if (counter > 1) {
          if (guessingNumber == randomNumber) {
            document.querySelector('body').style.backgroundColor = 'green';
            number.style.width = '30rem';
            message.textContent = '🎉 Congratulations';
            //check heighScore
            if (counter >= bestScore) {
              highscore.textContent = counter;
            }
            number.textContent = randomNumber;
          } else if (guessingNumber > randomNumber) {
            message.textContent = '📈 Too heigh';
            counter--;
          } else if (guessingNumber < randomNumber) {
            message.textContent = '📉 Too Low';
            counter--;
          }
        } else {
          document.querySelector('body').style.backgroundColor = 'red';
          message.textContent = '⛔ You lost the game';
          counter = 0;
        }
      } else {
        message.textContent = "Number needs to be between '1 and 20'";
      }
    } else {
      message.style.color = 'black';
      message.textContent = '♻ You need to start again';
    }

    score.textContent = counter;
  }

  //refresh the page
  document.querySelector('.again').addEventListener('click', function () {
    location.reload();
  });
}

init();
