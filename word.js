var Letter = require('./letter')
//var leter = new Letter;

function Word(word) {
    this.word = word;
    this.wordAr = [];
    this.letterAr=[]
    this.wordAr = word.split("");
    this.allFound1 = false;
    //this breaks up the letters of the word and puts them into an array
    this.letters = function(word){
        //splits the word into seperate objects
        
       // console.log(this.wordAr)
        for(i = 0; i < this.word.length; i ++ ){
            //the new letter is equal to one of the letters in the word and then
            //put through the letter constructor
            var newLetter = new Letter(this.word[i]);
            this.letterAr.push(newLetter)
            
        
        }
    }
    this.allFound = () => {
        if(this.letterAr.every(function(letter){
            return letter.hasGuessed = true;  //=
        }))
        this.allFound1 = false;
    }
    //calls the checkLetter funtion from the Letter constructor
    this.checkLetter1 = function(guess){
        var hanger = 0
            this.letterAr.forEach(function(letter){
                if(letter.letter === guess){
                    newLetter.hasGuessed = true;
                    hanger++;
                }
            })
            return hanger
        }
        this.wordRend = function (){
            var display = '';
            this.letterAr.forEach(function(letter){
               var currentLetter = letter.whenGuessed();
               display += currentLetter
            })
            return display;
        }
    }


module.exports = Word
