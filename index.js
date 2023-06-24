let player1 = document.querySelector('.img1');
let player2 = document.querySelector('.img2');
let heading = document.querySelector('.heading');

function diceGame() {

    let diceArrForFirstDice = ['/images/dice1.png', '/images/dice2.png', '/images/dice3.png', '/images/dice4.png', '/images/dice5.png', '/images/dice6.png'];
    let randomNumberForFirstDice = Math.floor(Math.random() * 6);

    let diceArrForSecondDice = ['/images/dice1.png', '/images/dice2.png', '/images/dice3.png', '/images/dice4.png', '/images/dice5.png', '/images/dice6.png'];
    let randomNumberForSecondDice = Math.floor(Math.random() * 6);

    let dice1 = diceArrForFirstDice[randomNumberForFirstDice];
    let dice2 = diceArrForSecondDice[randomNumberForSecondDice];

    const firstPlayer = player1.src = dice1;
    const secondPlayer = player2.src = dice2;

    if (firstPlayer < secondPlayer) {
        heading.textContent = "Player 2 Won1!";
    }
    else if (firstPlayer == secondPlayer) {
        heading.textContent = "Draw!";
    }
    else {
        heading.textContent = "PLayer 1 Won!";
    }
}

diceGame();