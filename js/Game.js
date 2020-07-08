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

  /**
   * Selects random phrase from phrases property
   * @return {Object} Phrase object chosen to be used
   */
  getRandomPhrase() {
    let randomIndex = Math.floor(Math.random() * this.phrases.length);
    return this.phrases[randomIndex];
  }

  /**
   * Begins game by selecting a random phrase and displaying it to user
   */
  startGame() {
    let overlay = document.getElementById("overlay");
    let randomPhrase = this.getRandomPhrase();
    let listOfLetters = document.getElementsByTagName("ul")[0];
    let keyboard = Array.from(document.getElementsByClassName("key"));

    keyboard.forEach((key) => {
      key.disabled = false;
      key.className = "key";
    });

    while (listOfLetters.lastElementChild) {
      listOfLetters.removeChild(listOfLetters.lastElementChild);
    }

    randomPhrase.addPhraseToDisplay();

    this.activePhrase = randomPhrase;

    let lives = document.getElementsByClassName("heart");
    Array.from(lives).forEach((life) => {
      life.src = "images/liveHeart.png";
    });

    overlay.style.visibility = "hidden";
  }

  /**
   * Handles onscreen keyboard button clicks
   * @param (HTMLButtonElement) button - The clicked button element
   */
  handleInteraction(button) {
    button.disabled = true;
    let letterCorrect = this.activePhrase.checkLetter(button.textContent);
    if (letterCorrect === false) {
      button.className = "key wrong";
      this.removeLife();
    } else if (letterCorrect === true) {
      button.className = "key chosen";
      this.activePhrase.showMatchedLetter(button.textContent);
      let gameWon = this.checkForWin();
      if (gameWon === true) {
        this.gameOver(true);
      }
    }
  }

  /**
   * Increases the value of the missed property
   * Removes a life from the scoreboard
   * Checks if player has remaining lives and ends game if player is out
   */
  removeLife() {
    let lives = document.getElementsByClassName("heart");
    lives[this.missed].src = "images/lostHeart.png";
    this.missed += 1;
    if (this.missed === 5) {
      this.gameOver(false);
    }
  }

  /**
* Checks for winning move
* @return {boolean} True if game has been won, false if game wasn't
won
*/
  checkForWin() {
    let unguessedLetters = document.getElementsByClassName("hide");
    if (unguessedLetters.length === 0) {
      return true;
    }
    return false;
  }

  /**
   * Displays game over message
   * @param {boolean} gameWon - Whether or not the user won the game
   */
  gameOver(gameWon) {
    overlay.style.visibility = "visible";
    let message = document.getElementById("game-over-message");
    let logoImage = document.getElementById("logo-image");
    let image = document.getElementById("game-over-img");
    if (gameWon === true) {
      message.textContent = "You Guessed It!";
      logoImage.src = "";
      image.src = "images/gameWon.png";
      overlay.className = "win";
    } else {
      message.textContent = "Try again.";
      logoImage.src = "";
      image.src = "images/gameLost.png";
      overlay.className = "lose";
    }
  }
}
