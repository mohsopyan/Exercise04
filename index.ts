// Soal1 "Write a code to swap the case of each character from string"
// first character = The QuiCk BrOwN Fox -> tHE qUIcK bRoWn fOX

let firstChar: string = "The QuiCk BrOwN Fox";
let toSwapChar: string = ""
let i: number = 0;

while(i < firstChar.length) {
    console.log(i)
    if(firstChar[i] === firstChar[i].toUpperCase()) {
        toSwapChar += firstChar[i].toLowerCase();
    }else {
        toSwapChar += firstChar[i].toUpperCase();
    }

    i++;
}
console.log(`${firstChar} -> ${toSwapChar}`)


// Soal2 "Write a code to find the largest of two given integers"
let num1: number = 42, num2: number = 27;

// Solution
console.log(Math.max(num1, num1));

// Soal5 "Write a code to change every letter a into * from a string of input"
// "An apple a day keeps the doctor away" -> "*n *pple * d*y keeps the doctor *w*y"

let _string: string = "An apple a day keeps the doctor away";

// Solution -> string built in method replace
console.log(_string.replace(/[A,a]/g, "*"));

