var Word = require('./word.js');
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

var game = {
    wordBank: ffArr,
    guessesWrong: 2,
    guessedLetters: [],
    display: 0,
    currentWord: null,
   
    startGame: function() {
        if (this.guessedLetters.length > 0) {
            this.guessedLetters = []
        }
        inquire.prompt({
            name: 'start',
            type: 'confirm',
            message: 'Ready to start?'
        }).then(function(data){
            if(data.start){
                game.newGame();
            }
            else{
                console.log('Just press up + enter when ready')
            }
        })
    },
    newGame: function() {
        console.reset = () => {
            return process.stdout.write('\033c');
        }
        if(this.guessesWrong == 2) {
            console.reset();
            console.log('\n Welcome to Console Hangman! \n The category is Final Fantasy Characters \n-_-_-_-_=_-_-_=_-_-_=_-_-_=_-')
            game.randomNum= Math.floor(Math.random() * 64);
            game.currentWord= new Word(ffArr[this.randomNum]);
            game.currentWord.letters();
            console.log(hangmanDisplay[guessesWrong])
            console.log(game.currentWord.wordRend())
            console.log('\n~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~')

        }
    }
   


}
game.startGame()