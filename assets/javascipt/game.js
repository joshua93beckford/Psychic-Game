var wText = document.getElementById("w");
var lText = document.getElementById("l");
var glText = document.getElementById("le");
var gText = document.getElementById("g");
var win = 0;
var loss = 0;
var gLeft = 10;
var guesses = new Array();
var letter = "";

document.addEventListener("keyup", play);

function play(event) {


    if (event.key == "a" || event.key == "b" || event.key == "c" || event.key == "d" || event.key == "e" || event.key == "f" || event.key == "g" || event.key == "h" || event.key == "i" || event.key == "j" || event.key == "k" || event.key == "l" || event.key == "m" || event.key == "n" || event.key == "o" || event.key == "p" || event.key == "q" || event.key == "r" || event.key == "s" || event.key == "t" || event.key == "u" || event.key == "v" || event.key == "w" || event.key == "x" || event.key == "y" || event.key == "z" || event.key == "A" || event.key == "B" || event.key == "C" || event.key == "D" || event.key == "E" || event.key == "F" || event.key == "G" || event.key == "H" || event.key == "I" || event.key == "J" || event.key == "K" || event.key == "L" || event.key == "M" || event.key == "N" || event.key == "O" || event.key == "P" || event.key == "Q" || event.key == "R" || event.key == "S" || event.key == "T" || event.key == "U" || event.key == "V" || event.key == "W" || event.key == "X" || event.key == "Y" || event.key == "Z") {

        if (event.key == letter) {
            win++;
            wText.textContent = win;
            guesses = new Array;
        }
        else {
            gLeft--;
            glText.textContent = gLeft;
            guesses.push(event.key + " ");
            gText.textContent = guesses;
        }

        if (gLeft == 0) {
            compG();
            gLeft = 10;
            loss++;
            lText.textContent = loss;
            guesses = new Array;
        }
    }

}


function compG() {

    var cLetter = Math.random() * 52;

    if (cLetter < 1) {
        letter = "a";
    }
    else if (cLetter < 2) {
        letter = "b";
    }
    else if (cLetter < 3) {
        letter = "c";
    }
    else if (cLetter < 4) {
        letter = "d";
    }
    else if (cLetter < 5) {
        letter = "e";
    }
    else if (cLetter < 6) {
        letter = "f";
    }
    else if (cLetter < 7) {
        letter = "g";
    }
    else if (cLetter < 8) {
        letter = "h";
    }
    else if (cLetter < 9) {
        letter = "i";
    }
    else if (cLetter < 10) {
        letter = "j";
    }
    else if (cLetter < 11) {
        letter = "k";
    }
    else if (cLetter < 12) {
        letter = "l";
    }
    else if (cLetter < 13) {
        letter = "m";
    }
    else if (cLetter < 14) {
        letter = "n";
    }
    else if (cLetter < 15) {
        letter = "o";
    }
    else if (cLetter < 16) {
        letter = "p";
    }
    else if (cLetter < 17) {
        letter = "q";
    }
    else if (cLetter < 18) {
        letter = "r";
    }
    else if (cLetter < 19) {
        letter = "s";
    }
    else if (cLetter < 20) {
        letter = "t";
    }
    else if (cLetter < 21) {
        letter = "u";
    }
    else if (cLetter < 22) {
        letter = "v";
    }
    else if (cLetter < 23) {
        letter = "w";
    }
    else if (cLetter < 24) {
        letter = "x";
    }
    else if (cLetter < 25) {
        letter = "y";
    }
    else if (cLetter < 26) {
        letter = "z";
    }
    else if (cLetter < 27) {
        letter = "A";
    }
    else if (cLetter < 28) {
        letter = "B";
    }
    else if (cLetter < 29) {
        letter = "C";
    }
    else if (cLetter < 30) {
        letter = "D";
    }
    else if (cLetter < 31) {
        letter = "E";
    }
    else if (cLetter < 32) {
        letter = "F";
    }
    else if (cLetter < 33) {
        letter = "G";
    }
    else if (cLetter < 34) {
        letter = "H";
    }
    else if (cLetter < 35) {
        letter = "I";
    }
    else if (cLetter < 36) {
        letter = "J";
    }
    else if (cLetter < 37) {
        letter = "K";
    }
    else if (cLetter < 38) {
        letter = "L";
    }
    else if (cLetter < 39) {
        letter = "M";
    }
    else if (cLetter < 40) {
        letter = "N";
    }
    else if (cLetter < 41) {
        letter = "O";
    }
    else if (cLetter < 42) {
        letter = "P";
    }
    else if (cLetter < 43) {
        letter = "Q";
    }
    else if (cLetter < 44) {
        letter = "R";
    }
    else if (cLetter < 45) {
        letter = "S";
    }
    else if (cLetter < 46) {
        letter = "T";
    }
    else if (cLetter < 47) {
        letter = "U";
    }
    else if (cLetter < 48) {
        letter = "V";
    }
    else if (cLetter < 49) {
        letter = "W";
    }
    else if (cLetter < 50) {
        letter = "X";
    }
    else if (cLetter < 51) {
        letter = "Y";
    }
    else {
        letter = "Z";
    }
}
compG();