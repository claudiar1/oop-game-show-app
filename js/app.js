/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

let game;

let startGameButton = document.getElementById("btn__reset");

startGameButton.addEventListener(
  "click",
  () => (game = new Game().startGame())
);
