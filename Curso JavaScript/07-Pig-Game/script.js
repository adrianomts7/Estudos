'use strict';

// Selecionando elementos
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const score0El = document.querySelector('#score--0');
const score1El = document.querySelector('#score--1');
const diceEl = document.querySelector('.dice');
const current0El = document.querySelector('#current--0');
const current1El = document.querySelector('#current--1');

const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

// Declarando variaveis
let scores, currentScore, activePlayer, playing;

// Funções
// Função para remover classe
const removeClass = function (player, classe) {
  player.classList.remove(classe);
};

// Função para adicionar classe
const addClass = function(player, classe) {
  player.classList.add(classe);
}

// Função inicializadora
const init = function () {
  // Declarando valores a varaveis
  scores = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  playing = true;

  addClass(diceEl, 'hidden');
  addClass(player0El, 'player--active');

  removeClass(player0El, 'player--winner');
  removeClass(player1El, 'player--winner');

  // player0El.classList.remove('player--winner');

  displayCurrent(0, currentScore);
  displayCurrent(1, currentScore);

  displayScore(0, scores);
  displayScore(1, scores);
};

// Função para mudar jogador
const switchPlayer = function () {
  currentScore = 0;
  document.querySelector(`#current--${activePlayer}`).textContent =
    currentScore;

  // Verificando se o jogador que perdeu foi 0, quem jogará é o jogador1;
  activePlayer = activePlayer === 0 ? 1 : 0;

  // Troca dinâmica das classes
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
};

// Função para mostrar current
const displayCurrent = function (activePlayer, currentScore) {
  document.querySelector(`#current--${activePlayer}`).textContent =
    currentScore;
};

// Função para mostrar score
const displayScore = function (activePlayer, scores) {
  document.querySelector(`#score--${activePlayer}`).textContent =
    scores[activePlayer];
};

init();

// Função de dados rolantes
btnRoll.addEventListener('click', function () {
  if (playing) {
    // 1. Começar gerando uma rodada de dados aleatorios
    const dice = Math.trunc(Math.random() * 6) + 1;

    // 2. Exibir os dados
    removeClass(diceEl, 'hidden')
    diceEl.src = `img/dice-${dice}.png`;

    //  3. Verificar se o número gerado é 1
    if (dice !== 1) {
      // Adicionando número ao current score
      currentScore += dice;

      displayCurrent(activePlayer, currentScore);
    } else {
      //  Mudando para o próximo jogador
      switchPlayer();
    }
  }
});

btnHold.addEventListener('click', function () {
  if (playing) {
    // 1. Adicionar a pontuação atual ao jogador ativo
    scores[activePlayer] += currentScore;
    displayScore(activePlayer, scores);

    // 2. Verificar se a pontuação é maior ou igual a 100
    if (scores[activePlayer] >= 20) {
      // Finalizar o jogo
      addClass(diceEl, 'hidden')
      playing = false;
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
    } else {
      // Mudar para o outro jogador
      switchPlayer();
    }
  }
});

btnNew.addEventListener('click', init);
