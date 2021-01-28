console.log(`21 01 26 HTML CSS JS Project Two`);

// select element/placeholders using querySelector
let playerOne = document.querySelector("#playerOne");
let playerTwo = document.querySelector("#playerTwo");
let leadPlayer = document.querySelector("#leadPlayer");
// console log element/placeholders
// console.log(playerOne);
// console.log(playerTwo);
// console.log(leadPlayer);

// seleceted buttons using querySelector
let playeroneBtn = document.querySelector("#playeroneBtn");
let playertwoBtn = document.querySelector("#playertwoBtn");
// // console log for buttons
// console.log(playeroneBtn);
// console.log(playertwoBtn);

// select player score using querySelector
let playerone = document.querySelector("#playerone");
let playertwo = document.querySelector("#playertwo");
// console.log(playerone);
// console.log(playertwo);

let score1 = 0;
let score2 = 0;
// create function to add 1 when player is clicked 
function addOne() {
    score1++;
    // console.log(score1);
    playerone.innerHTML = score1;
    updateleadPlayer();
}

function addTwo() {
    score2++;
    playertwo.innerHTML = score2;
    updateleadPlayer();
}

function updateleadPlayer() {
    console.log(score1); console.log(score2);
    if (score1 == score2) {
        console.log("tied");
    } else if (score1 > score2) {
        console.log("player one in the lead");
    } else  (score1 < score2); {
        console.log("player two is in the lead");
    }
}

playeroneBtn.addEventListener("click", addOne);
playertwoBtn.addEventListener("click", addTwo);
// updateleadPlayer.addEventListener("")