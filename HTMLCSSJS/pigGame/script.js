'use strict';

// Selecting elements
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');

const diceEl = document.querySelector('.dice');

const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

let scores, currentScore, activePlayer, playing;

const init = function () {
    // starting conditions
    scores = [0, 0];
    currentScore = 0;
    activePlayer = 0;
    playing = true;
    score0El.textContent = 0;
    score1El.textContent = 0;
    current0El.textContent = 0;
    current1El.textContent = 0;
    diceEl.classList.add('hidden');
    player0El.classList.remove('player--winner');
    player1El.classList.remove('player--winner');
    player0El.classList.add('player--active');
    player1El.classList.remove('player--active');
}
init();

const switchPlayer = function () {
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    currentScore = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;
    player0El.classList.toggle('player--active');
    player1El.classList.toggle('player--active');
}

// rolling dice functionality
btnRoll.addEventListener('click', function () {
    if (playing) {
        // generate a random dice roll
        const dice = Math.trunc(Math.random() * 6) + 1;

        // display the dice
        diceEl.classList.remove('hidden');
        diceEl.src = `dice-${dice}.png`
        console.log(dice);

        // check for rolled 1 
        if (dice !== 1) {
            // add dice to current score
            currentScore += dice;

            document.getElementById(`current--${activePlayer}`).textContent = currentScore;
        } else {
            // if dice is 1, switch to next player
            switchPlayer();
        }
    }
}
)


// holding the current score
btnHold.addEventListener('click', function () {
    if (playing) {
        // add current score to score of active player
        scores[activePlayer] += currentScore;
        document.querySelector(`#score--${activePlayer}`).textContent = scores[activePlayer];


        // check score is already atleast 100
        if (scores[activePlayer] >= 20) {
            // if so finish the game, 
            playing = false;
            diceEl.classList.add('hidden');
            document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
            document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
        } else {
            // if not switch to next player
            switchPlayer();
        }
    }

})


// new game button
btnNew.addEventListener('click', init);

