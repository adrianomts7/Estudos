'use strict';

/*
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = 'Correct Number'

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 19;

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);
*/

let secretNumber = Math.trunc(Math.random() * 20) + 1; 
let score = 20;
let highScore = 0;

const displayMesssage = function(message) {
  document.querySelector('.message').textContent = message;
}

const displayScore = function(valor) {
  document.querySelector('.score').textContent = valor;
}

document.querySelector('.check').addEventListener('click', function() {
  const guess = Number(document.querySelector('.guess').value);
  
  // Se não tiver nada no input
  if (!guess) {
    // document.querySelector('.message').textContent = '⛔ No Number!'
    displayMesssage('⛔ No Number!');
  } 
  // Jogador vence
  else if( guess === secretNumber ) {
    // document.querySelector('.message').textContent = '🎉 Correct Number';
    displayMesssage('🎉 Correct Number')
    document.querySelector('body').style.backgroundColor = '#60b347';
    
    if (score > highScore) {
      highScore = score;
    }

    document.querySelector('.highscore').textContent = highScore;
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('.number').style.width = '30rem';
  } else if (guess !== secretNumber) {
    // Se tiver chances de adivinhar o número ainda
    if (score > 1) {
      // se o número for maior mostre ao usuario que foi muito alto, caso contrario muito baixo
      // document.querySelector('.message').textContent = guess > secretNumber ? '📈 Too High!' : '📉 Too low!';
      score --;
      displayMesssage(guess > secretNumber ? '📈 Too High!' : '📉 Too low');
      // document.querySelector('.score').textContent = score
      displayScore(score);
    } 
    // Se perder todas as chancer é não tiver adivinhado o número
    else {
      // document.querySelector('.message').textContent = 'You lost to game';
      displayMesssage('You lost to game');
      // document.querySelector('.score').textContent = 0;
      displayScore(0);
    }
  }
  // // Jogador perde se colocar número mais alto que o número secreto
  // else if ( guess > secretNumber ) {
  //   // Se tiver chances de adivinhar o número ainda
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = '📈 Too High!'
  //     score --;
  //     document.querySelector('.score').textContent = score;
  //   } 
  //   // Se perder todas as chancer é não tiver adivinhado o número
  //   else {
  //     document.querySelector('.message').textContent = 'You lost to game';
  //     document.querySelector('.score').textContent = 0;
  //   }
  // } 
  // // Jogador digita um número menor que o número secreto, ele perde
  // else if ( guess < secretNumber ) {
  //   // Se tiver chances de adivinhar o número ainda
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = '📉 Too low!'
  //     score --;
  //     document.querySelector('.score').textContent = score;
  //   } // Se perder todas as chancer é não tiver adivinhado o número
  //   else {
  //     document.querySelector('.message').textContent = 'You lost to game';
  //     document.querySelector('.score').textContent = 0;
  //   }
  // }
  
})

document.querySelector('.again').addEventListener('click', function() {
  document.querySelector('.number').textContent = '?';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  // document.querySelector('.message').textContent = 'Start guessing...';
  displayMesssage('Start guessing...');

  secretNumber = Math.trunc(Math.random() * 20) + 1;

  score = 20;
  // document.querySelector('.score').textContent = score; 
  displayScore(score);
})
