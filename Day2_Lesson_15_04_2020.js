// COMMENTS
// console.log("Hello Strivers!");
// console.log(13.6);
// console.log(2.99e10); // 10^2=100
// console.log("2 * 4"); // STRING
​
/*

BLOCK COMMENT
​
*/
​
// NUMBERS
​
// console.log(2 * (4 + 2)); // Operator precedence
​
// console.log(5 % 2); // Reminder
​
// console.log(0 / 0); // NaN
​
// console.log(1 * 0);
​
// STRINGS
​
//console.log("Hello Strivers");
//console.log('Hello Strivers');
​
/*console.log(`Hello Strivers
!!!!!!!
`);*/   // Per ottenere queste virgolette, premere alt + 9 + 6 


​
// console.log("Hello World".toUpperCase());    // Rende tutta la stringa in MAIUSCOLO
// console.log("Hello World".toLowerCase());    // Rende tutta la stringa in minuscolo    
​
/* console.log("Hello".toLowerCase() + " World".toUpperCase()); 

Rende "Hello" tutto minuscolo ed world tutto maiuscolo

*/

/* console.log(parseInt("Hello 100")); 

È una funzione che analissa il contenuto all'interno delle parentesi
e, se incontra un numero intero, lo restituisce come un numero.
Se il primo valore che trova non è un intero, restituisce NaN (Not a Number)
È possibile scegliere la base di lettura del numero,
aggiungendo un comma dopo le virgolette ("", 10). 

Esempio

console.log(parseInt("100", 10)) -- Restituisce un numero
console.log("100") -- Restituisce una stringa



console.log(parseInt("Hello 100"))  // -- Restituisce NaN
console.log(parseInt("100"))    // -- Restituisce un numero intero

let num = "18";
console.log(typeof(num));   // Restituisce il tipo di dato all'interno della parentesi


*/
​
// console.log("" + 12); -- //
​
// var n = 0; // Do not use it
​
// let number = 2.5;
// let num = 3;
// let string = "Hello";
​
// const string2 = "World";
​
// num = 4;
// string = "Strivers";
​
// console.log(number);
// console.log(num * num);
// console.log(string.toLowerCase());
​
// console.log("5" - 1); // NaN
​
// BOOLEAN TYPES --> T or F
​
// console.log(3 > 2);
// console.log(3 < 2);
​
// console.log(3 >= 2);
// console.log(3 <= 3);
​
// console.log("a" < "B");
​
// console.log(2 === 2); // 3 equal sign
// console.log(2 == 2); // do not use 2 equal sign for comparison
​
// console.log(3 === 2);
​
// console.log(2 !== 3); // ! = =
// console.log(3 !== 3); // ! = =
​
// SPECIAL VALUES
​
/* 

let example;
console.log(example); -- Non essendoci nulla nella variabile example,
una volta stampata a video verrà notificato un valore indefinito, appunto
"undefined".  

console.log(undefined);
Stessa cosa per undefined all'interno delle parentesi.

console.log(null); // empty value (or non existent)

*/
​
// LOGICAL OPERATORS
​
// AND &&
// console.log("-----------AND----------");
// console.log(false && true);
// console.log(false && false);
// console.log(true && false);
// console.log(true && true);
// console.log(true && true && true);
​
// // OR ||
// console.log("-----------OR----------");
// console.log(false || true);
// console.log(false || false);
// console.log(true || false);
// console.log(true || true);
// console.log(true || false || false || false);
​
// // NOT !
// console.log("-----------NOT----------");
// console.log(!false);
// console.log(!true);
​
// const theNumber = 2.2;
​
// console.log(Number.isNaN(theN))
​
// if (Number.isInteger(theNumber) && !Number.isNaN(theNumber)) {
//   // the condition is evaluated as true
//   console.log("THE NUMBER IS AN INTEGER");
//   console.log("-------");
// } else {
//   // the condition is evaluated as false
//   console.log("THE NUMBER IS NOT AN INTEGER");
// }
​
/*
let num = 20;

if (Number.isInteger(num) && num < 20) {
    console.log("number is lower than 20");
} else {
    console.log("number is greater or equal than 20");
}
*/

/*

let num = 101;

if (num < 20) {
    console.log("Small");
} else if (num < 100) {
    console.log("Medium");
} else {
    console.log("Large");
}
​
*/

// Number.isNaN(2);
