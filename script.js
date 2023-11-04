const moleSwitchTime = 1500;
let score = 0;
let timer = null;
let isGameOver = true;
const gameTime = 15000;

let holes = [
    document.querySelector(".hole1"),
    document.querySelector(".hole2"),
    document.querySelector(".hole3"),
    document.querySelector(".hole4"),
    document.querySelector(".hole5"),
    document.querySelector(".hole6"),
];

const moles$$ = document.querySelectorAll(".mole")
for (const mole$$ of moles$$) {
    mole$$.addEventListener("click", whack);
}

function hideMoles() {
    for (const hole$$ of holes) {
        hole$$.classList.remove("up");
    }
}

function changeMole() {
    hideMoles();
    const randomHole$$ = holes[Math.floor(Math.random() * 6)];
    randomHole$$.classList.add("up");
}

function whack() {
    const hole$$ = this.closest(".hole")
    if(!isGameOver && hole$$.classList.contains("up")) {
        hole$$.classList.remove("up");
        addPoint();
    }
}

function addPoint() {
    score++;
    updateScoreBoard();
}

function updateScoreBoard() {
    const scoreBoard$$ = document.querySelector(".score");
    scoreBoard$$.textContent = score;
}

function startGame() {
    endGame();
    timer = setInterval(changeMole, moleSwitchTime);
    isGameOver = false;
    score = 0;
    updateScoreBoard();
    setTimeout(endGame, gameTime);
}

function endGame() {
    if(timer !== null) {
        clearInterval(timer);
    }
    hideMoles();
    isGameOver = true;
}



