//var Word = require('./word.js');
var inquire = require('inquirer')
var guessesWrong = 2

//var guess = process.argv[2]
//Array of words that will be randomly chosen for the game
var ffArr = ["sephiroth", "cloud", "squall", "rinoa", "redxii", "barret", "tifa", "bartz", "vaan", "balthier",
    "penelo", "exdeath", "ifrit", "ramuh", "alexander", "zidane", "kuja", "vincent", "beatrix", "lightning",
    "basch", "bahamut", "orlandeu", "ramza", "delita", "freya", "stiener", "cecil", "kain", "noctis", "prompto",
    "golbez", "gladiolus", "ignis", "carbuncle", "moogle", "cactuar", "terra", "chocobo", "coeurl", "cocatris",
    "tidus", "aeris", "yuna", "kefka", "yuffie", "rikku", "vivi", "jecht", "cait", "jenova", "locke", "amarant",
    "ultima", "eden", "gilgamesh", "nyx", "biggs", "cid", "reddas", "omega", "fran", "vayne", "gabranth"
]
//graphics for the hangman gallows
var hangmanDisplay = ["\n\n\n\n\n\n\n-------------", "\n |\n |\n |\n |\n |\n |\n |\n-------------",
    "____________\n |         |\n |\n |\n |\n |\n |\n-------------",
    "____________\n |         |\n |         O\n |\n |\n |\n |\n |\n-------------",
    "____________\n |         |\n |         O\n |         |\n |         |\n |\n |\n |\n-------------",
    "____________\n |         |\n |         O\n |         |\n |         |\n |        ---\n |\n |\n-------------",
    "____________\n |         |\n |         O\n |       __|\n |         |\n |        ---\n |\n |\n-------------",
    "____________\n |         |\n |         O\n |       __|__\n |         |\n |        ---\n |\n |\n-------------",
    "____________\n |         |\n |         O\n |       __|__\n |         |\n |        ---\n |        |\n |\n-------------",
    "____________\n |         |\n |         O\n |       __|__\n |         |\n |        ---\n |        | |\n |\n-------------"
]


//console.log(ffArr[randomNum])
var game = {

    
    guessesWrong: 2,
    guessedAr: ['2'],
    display: 0,
    currentWord: null,
   // currentWord: words,
    startGame: () =>{
             
        console.reset = () => {
         return process.stdout.write('\033c');

           
        }
        
       
        guessedAr = []  
        this.question= () => {
            inquire.prompt({
                name: 'guess',
                type: 'input',
                message: 'Guess a letter'
            }).then(function(data){
               thisGuess = (data.guess);
               var already = false;
               console.reset();

               for(i = 0; i < this.guessedAr.length; x ++) {
               
                    if (thisGuess == this.guessedAr[i]){
                       console.log("*** You've already guessed " + data.guess + '***');
                       already = true
                       this.question()
                   }
               }
               if (already === false) {
                   console.log(this.currentWord + 'yes')
                   this.guessedAr.push(thisGuess);
                  // var inLetterAr = this.currentWord.checkLetter1(thisGuess);
                   if (this.currentWord.checkLetter1(thisGuess) == 0) {
                       console.reset();
                       console.log("\n*******          *******\n");
                       guessesWrong ++;
                       this.display ++;
                       console.log(hangmanDisplay[guessesWrong])
                       console.log('\n-_-_-_-_-_-_-_-_-_-_-_-_-')
                       console.log('\n Letters Guessed: ' + this.guessedAr)

                   }
                   else if(this.currentWord.allFound() == true) {
                       console.reset();
                       console.log('\n*******          *******\n')
                       console.log('Thats right, you gessed it! \n You Won!')
                       process.exit()
                   }
                   else if (this.display == 0){
                       console.reset();
                       console.log('\n*******          *******\n')
                       console.log('Guesses Remaining: ' + (12 - guessesWrong))
                       console.log('\n*******          *******\n')
                       console.log(this.currentWord.wordRend())
                       console.log("Letters guessed: " + this.guessedAr)
                   }
                   else{
                       console.reset();
                       console.log('\n*******          *******\n')
                       console.log('Correct \n\n*******          *******\n');
                       console.log(hangmanDisplay[guessesWrong]);
                       console.log(this.currentWord.wordRend);
                       console.log('\n-_-_-_-_-_-_-_-_-_-_-_-_-')
                       console.log("Letters guessed: " + this.guessedAr)
                   }
               }
            })
         }
         guessesWrong = 2
         if(guessesWrong == 2){
            console.reset();
            this.randomNum= Math.floor(Math.random() * 64);
            this.words= ffArr[this.randomNum];
            console.log('\n Welcome to Console Hangman! \n The category is Final Fantasy Characters \n-_-_-_-_=_-_-_=_-_-_=_-_-_=_-');
            console.log(this.guessedAr)
            currentWord = new Word (this.words);
            currentWord.letters();
            console.log(hangmanDisplay[guessesWrong] + '\n~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~' )
            console.log(currentWord.wordRend() + '\n')
            this.question()
            
        }
        
    }

}
game.startGame()