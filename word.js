var Letter = require('./letter')
//var leter = new Letter;

function Word(word) {
    this.word = word;
    //this.wordAr = [];
    this.letterAr=[]
   // this.wordAr = word.split("");
    this.allFound1 = false;
    //this breaks up the letters of the word and puts them into an array
    this.letters = function(){
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
            return true;  //=
        }))
        this.allFound1 = false;
    }
    //calls the checkLetter funtion from the Letter constructor
    this.checkLetter1 = function(guess){
        var hanger = 0
            this.letterAr.forEach(function(lett){
                if(lett.letter == guess){
                    lett.hasGuessed = true;
                    hanger ++;
                }
            })
            return hanger
        }
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
