// Soal 1 "Write a code to swap the case of each character from string"
// first character = The QuiCk BrOwN Fox -> tHE qUIcK bRoWn fOX

let firstChar: string = "The QuiCk BrOwN Fox";
let toSwapChar: string = ""
let i: number = 0;

while(i < firstChar.length) {
    if(firstChar[i] === firstChar[i].toUpperCase()) {
        toSwapChar += firstChar[i].toLowerCase();
    }else {
        toSwapChar += firstChar[i].toUpperCase();
    }

    i++;
}
console.log(`${firstChar} -> ${toSwapChar}`)


// Soal 2 "Write a code to find the largest of two given integers"
let x: number = 42, y: number = 27;
console.log(Math.max(x, y));


// Soal3 "Write a conditional statement to sort three numbers"
let num1: number = 42;
let num2: number = 27;
let num3: number = 18;
const result: number[] = [num1, num2, num3];

console.log(result.sort());

// Soal 4 "Write a code that shows 1 if the input is a string, 2 if the input is a number and 3 for others data type"
let input: any = "hello";

if(typeof(input) === 'string') {
    console.log(1);
} else if (typeof(input) === 'number') {
    console.log(2);
} else {
    console.log(3);
}
console.log(`${input} -> 1`);


// Soal 5 "Write a code to change every letter a into * from a string of input"
// "An apple a day keeps the doctor away" -> "*n *pple * d*y keeps the doctor *w*y"

let _string: string = "An apple a day keeps the doctor away";

// Solution -> string built in method replace
console.log(`${_string} -> ${_string.replace(/[A,a]/g, "*")}`);

