var Letter = require('./letter')
//var leter = new Letter;
var wordAr = [];
var word;


function Word(word) {
    this.word = word;
    this.wordAr = [];
    this.letterAr=[]
    //this breaks up the letters of the word and puts them into an array
    this.letters = function(word){
        //splits the word into seperate objects
        this.wordAr = word.split("");
       // console.log(this.wordAr)
        for(i = 0; i < this.wordAr.length; i ++ ){
            //the new letter is equal to one of the letters in the word and then
            //put through the letter constructor
            var newLetter = new Letter(this.wordAr[i]);
            this.letterAr.push(newLetter)

        
        }
        
    
    }
    //calls the checkLetter funtion from the Letter constructor
    this.checkLetter1 = function(guess){
        for (i = 0; i < this.letterAr.length; i ++){
            
            this.letterAr[i].checkLetter(guess)
            this.letterAr[i].whenGuessed()
        }
       // console.log(this.letterAr)
     //  console.log(this.word)
    }
}
//console.log(Word)
module.exports = Word
