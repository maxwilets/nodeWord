var Word = require('./word');
var word = new Word;
var guess = process.argv[2]
//Array of words that will be randomly chosen for the game
var ffArr = ["Sephiroth", "Cloud", "Squall", "Rinoa", "RedXIII", "Barret", "Tifa", "Bartz", "Vaan", "Balthier", 
              "Penelo", "Exdeath", "Ifrit", "Ramuh", "Alexander", "Zidane", "Kuja", "Vincent", "Beatrix", "Lightning",
              "Basch", "Bahamut", "Orlandeu", "Ramza", "Delita", "Freya", "Stiener", "Cecil", "Kain", "Noctis", "Prompto",
              "Golbez", "Bladiolus", "Ignis", "Carbuncle", "Moogle", "Cactuar", "Terra", "Chocobo", "Coeurl", "Cocatris",
              "Tidus", "Aeris", "Yuna", "Kefka", "Yuffie", "Rikku", "Vivi", "Jecht", "Cait", "Jenova", "Locke", "Amarant",
             "Ultima", "Eden", "Gilgamesh", "Nyx", "Biggs", "Cid", "Reddas", "Omega", "Penelo", "Vayne", "Gabranth"] 