/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

class Phrase {
  constructor(phrase) {
    this.phrase = phrase.toLowerCase();
  }

  /**
   * Display phrase on game board
   */
  addPhraseToDisplay() {
    let ul = document.getElementsByTagName("ul");
    let arrOfLetters = this.phrase.split("");
    arrOfLetters.map((letter) => {
      let li = document.createElement("li");
      if (letter === " ") {
        li.className = "space";
      } else {
        li.textContent = letter;
        li.className = `hide letter ${letter}`;
      }
      ul[0].appendChild(li);
    });
  }

  /**
   * Checks if passed letter is in phrase
   * @param (string) letter - Letter to check
   */
  checkLetter(letter) {
    if (this.phrase.includes(letter)) {
      return true;
    }
    return false;
  }

  /**
   * Displays passed letter on screen after a match is found
   * @param (string) letter - Letter to display
   */
  showMatchedLetter(letter) {
    let matchedLetters = document.getElementsByClassName(letter);
    let matchedLetterArray = Array.from(matchedLetters);
    matchedLetterArray.map((letterElement) => {
      letterElement.className = `show letter ${letter}`;
    });
  }
}
