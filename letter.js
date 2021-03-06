//this file will hold the data for each letter of the word
var Letter = function (letter) {

    this.letter = letter //this is the character for the letter

    this.hasGuessed = false; //tells the computer if the guessed letter is correct or not

    this.whenGuessed = function () {
        //if the letter guessed is wrong it will fill with _ if not it will do the guess
        //this function will be looped in the word.js 
        if (this.letter == " ") {
            this.hasGuessed = true
            return " "
        }
        if (this.hasGuessed === false) {

            return (" _ ")

        } else {
            return this.letter
        }

    }
    //checks if the guess matches any of the letters in the word
    this.checkLetter = function (guess) {

        if (this.hasGuessed == true) {
            this.hasGuessed = true
            return this.letter
        } else {

            return " _ "
        }

    }
}
//exports the letter file to be used by other files
module.exports = Letter