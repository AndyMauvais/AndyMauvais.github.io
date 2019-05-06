var alphabet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

/* Ascii will hold letters in string by ascii value */
    var ascii = [];

var inputString = prompt("Please enter a word you wish to cipher: ");
var inputKey = prompt("Please enter an integer for your key: ");

// check if each character is a letter 
function checkWord() {
    for (var i=0; i < inputString.length; i++) {
        if (!(inputString[i] in alphabet)) {
            inputString = prompt("Please enter a word you wish to cipher (only letters): ");
            checkWord();
        }
    }
}
//checks if key is a number
function checkNumber() {
    if (!(Number.isInteger(parseInt(inputKey)))) {
        inputKey = prompt("Please enter an integer for your key (no decimals): ");
        checkNumber();
    }   
}

function cipher() {
    checkWord();
    checkNumber();    
}
cipher();