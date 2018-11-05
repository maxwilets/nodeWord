# nodeWord

### Objectives

* Create a game that prompts the user to guess letters to a word in the console using the inquirer NPM package.

* Create 3 JavaScript files
     * Letter.js: create a constructor that will use a representation of the work (underscore) and will:
          * A string value to store the underlying character for the letter
          * A boolean value that stores whether that letter has been guessed
          * A function that returns the underlying character if the letter has been guessed, or a placeholder (like an underscore) if the              letter has not been guessed
          * A function that takes a character as an argument and checks it against the underlying character, updating the stored boolean               value to true if it was guessed correctly.
     
    * Word.js: a constructor that is required by Letter.js, it is the logic for the current word the player has to guess as well as:
         * An array of new Letter objects representing the letters of the underlying word
         * A function that returns a string representing the word. This should call the function on each letter object (the first function            defined in Letter.js) that displays the character or an underscore and concatenate those together.
         * A function that takes a character as an argument and calls the guess function on each letter object (the second function defined            in Letter.js)
         
    * index.js: this file is dependent on Word.js and contains the process on the remaining parts of the game such as: 
         * The remaining guesses the user has left.
         * Chooses a word from the array of words.
         
 ### Technologies Used
 
      * JavaScript
      * Node.js
      * Inquire NPM
