console.log(`21 01 26 HTML CSS JS Project Two`);

// select element/placeholders using querySelector
let playerOne = document.querySelector("#playerOne");
let playerTwo = document.querySelector("#playerTwo");
let leadPlayer = document.querySelector("#leadPlayer");
// seleceted buttons using querySelector
let playeroneBtn = document.querySelector("#playeroneBtn");
let playertwoBtn = document.querySelector("#playertwoBtn");

// console log element/placeholders
console.log(playerOne);
console.log(playerTwo);
console.log(leadPlayer);
// console log for buttons
console.log(playeroneBtn);
console.log(playertwoBtn);


// create function to add 1 when player is clicked 
 function addone()  {
     let foo = document.getElementById(`playerone`).innerHTML
     foo++;
     document.getElementById(`playerone`).innerHTML = foo;
} 

// function updateleadPlayer() {
//     if ()
// }

function resetGame() {

}

playeroneBtn.addEventListener("click", addone);

