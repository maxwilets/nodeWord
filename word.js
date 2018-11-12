//requires the letter.js file
var Letter = require('./letter')
//creates the word constructor
function Word(word) {
    this.word = word;
    this.letterAr=[]
    this.allFound1 = false;
    this.letters = function(){
        
        
        for(i = 0; i < this.word.length; i ++ ){
            //the new letter is equal to one of the letters in the word and then
            //put through the letter constructor
            var newLetter = new Letter(this.word[i]);
            this.letterAr.push(newLetter)
            
        
        }
    }
    //if all the words found is true, it will run this function ending the game
    this.allFound = () => {
        if(this.letterAr.every(function(letter){
            return letter.hasGuessed == true;  
        }))
        {
        this.allFound1 = true;
        return true}
    }
    //calls the checkLetter funtion from the Letter constructor
    this.checkLetter1 = function(guess){
        var hanger = 0
            this.letterAr.forEach(function(lett){
                //checks guess with every letter in the word if
                //one matches it changes lett.hasGuessed to true
                if(lett.letter == guess){
                    lett.hasGuessed = true;
                    hanger ++;
                }
            })
            return hanger
        }
        //renders the word to the console screen depending on how many 
        //letters have been guessed
        this.wordRend = function (){
            var display = '';
            this.letterAr.forEach(function(lett){
               var thisLetter = lett.checkLetter();
               display += thisLetter
            })
            return display;
        }
    }


module.exports = Word
