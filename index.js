var Word = require('./word.js');
var inquire = require('inquirer')
var guessesWrong = 2

//var guess = process.argv[2]
//Array of words that will be randomly chosen for the game
var ffArr = ["Sephiroth", "Cloud", "Squall", "Rinoa", "RedXIII", "Barret", "Tifa", "Bartz", "Vaan", "Balthier",
    "Penelo", "Exdeath", "Ifrit", "Ramuh", "Alexander", "Zidane", "Kuja", "Vincent", "Beatrix", "Lightning",
    "Basch", "Bahamut", "Orlandeu", "Ramza", "Delita", "Freya", "Stiener", "Cecil", "Kain", "Noctis", "Prompto",
    "Golbez", "Gladiolus", "Ignis", "Carbuncle", "Moogle", "Cactuar", "Terra", "Chocobo", "Coeurl", "Cocatris",
    "Tidus", "Aeris", "Yuna", "Kefka", "Yuffie", "Rikku", "Vivi", "Jecht", "Cait", "Jenova", "Locke", "Amarant",
    "Ultima", "Eden", "Gilgamesh", "Nyx", "Biggs", "Cid", "Reddas", "Omega", "Penelo", "Vayne", "Gabranth"
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

var randomNum = Math.floor(Math.random() * 64);
var words = ffArr[randomNum]
//console.log(ffArr[randomNum])
function gameStart() {
    word = new Word(words)
    console.log(hangmanDisplay[guessesWrong])
    console.log('Welcome to hangman \n-------------------------------- \nThe category is Final Fantasy')
    gamePrompt()



}

function gamePrompt() {
    //promt to ask for a letter guess
    inquire.prompt([{
        name: 'guess',
        message: 'What is your guess?'
        //callback function to check the guess from the letters constructor
    }]).then(function(data) {
        word.letters(words)
        word.checkLetter1(data.guess);
        })
}
    gameStart()