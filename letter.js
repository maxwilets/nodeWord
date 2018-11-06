guess = process.argv[2]

var Letter = function (letter){
    
    this.letter = letter   //this is the character for the letter

    this.hasGuessed = false; //tells the computer if the guessed letter is correct or not

    this.whenGuessed = function(){     
    //if the letter guessed is wrong it will fill with _ if not it will do the guess
    //this function will be looped in the word.js 
        if (this.hasGuessed === false){
            return "_"
        }
        return this.letter
    }
    //checks if the guess matches any of the letters in the word
    this.checkLetter = function(guess){
        if (guess === this.letter){
            this.hasGuessed = true
        }
    }
}

module.exports = Letter 
