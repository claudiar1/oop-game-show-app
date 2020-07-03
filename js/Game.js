/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

class Game {
  constructor() {
    this.missed = 0;
    this.phrases = [
      new Phrase("Bears beets battlestar galactica"),
      new Phrase("Thats what she said"),
      new Phrase("I declare bankruptcy"),
      new Phrase("I feel god in this chilis tonight"),
      new Phrase("I am Beyonce always"),
    ];
    this.activePhrase = null;
  }

  getRandomPhrase() {
    let randomIndex = Math.floor(Math.random() * this.phrases.length);
    return this.phrases[randomIndex];
  }

  startGame() {
    let overlay = document.getElementById("overlay");
    overlay.style.visibility = "hidden";
    let randomPhrase = this.getRandomPhrase();
    randomPhrase.addPhraseToDisplay();
    this.activePhrase = randomPhrase;
  }

  handleInteration() {}

  removeLife() {}

  checkForWin() {}

  gameOver() {}
}
