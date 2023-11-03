hole$$ = document.querySelectorAll(".hole");
mole$$ = document.querySelectorAll(".mole");
score$$ = document.querySelector(".score");

let lastHole;
let isGameOver = false;
let points = 0;

const appearingPosition = (min, max) => { 
    let positionRandomized = Math.floor(Math.random() * (max - min) + min);
    return positionRandomized;
}

let appearing = appearingPosition(1, 6);

const randomHole = (randomNumber) => {
    let newPos = randomNumber;
    (lastHole != newPos) ? lastHole = newPos : randomHole(randomNumber);
    return newPos;
}

let position = randomHole(appearing);



