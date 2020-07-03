/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

class Phrase {
  constructor(phrase) {
    this.phrase = phrase.toLowerCase();
  }

  addPhraseToDisplay() {
    let ul = document.getElementsByTagName("ul");
    let arrOfLetters = this.phrase.split("");
    arrOfLetters.map((letter) => {
      console.log("poop");
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

  checkLetter() {}

  showMatchedLetter() {}
}
