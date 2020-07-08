/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

let game;

let startGameButton = document.getElementById("btn__reset");

startGameButton.addEventListener("click", () => {
  game = new Game();
  game.startGame();
});

Array.from(document.getElementsByClassName("key")).forEach((key) => {
  key.addEventListener("click", (e) => {
    game.handleInteraction(e.target);
  });
});

document.addEventListener("keydown", (e) => {
  let key = e.key;
  let keyButton = document.getElementById(`${key}`);
  game.handleInteraction(keyButton);
});
