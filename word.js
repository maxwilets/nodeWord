Letter = require('./letter')
var leter = new Letter;
var wordAr = [];
var word;


function Word(word) {
    this.word = word;
    this.wordAr = [];
    this.letterAr[]
    //this breaks up the letters of the word and puts them into an array
    this.letters = function(){
        //splits the word into seperate objects
        this.wordAr = this.word.split("");
        for(i = 0; i < wordAr.length; i ++ ){
            //the new letter is equal to one of the letters in the word and then
            //put through the letter constructor
            var newLetter = leter(this.wordAr[i]);
            this.letterAr.push(newLetter)
        }
    }
    this.checkLetter = function(){
        for (i = 0; i < letterAr.length; i ++){
            
        }
    }
}
