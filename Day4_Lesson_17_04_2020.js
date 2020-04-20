// Strings

// alt + 9 + 6 = ``

/*
Le `` servono per far si che le stringhe scritte all'interno
della nostra variabile ecc vengano stampate su linee diverse 
*/

/*
let myNumber = 2;

const myString = `First line
Second line
This is my value ${2+3}
`;

console.log(myString);
*/


//  myString.slice (3,6);   // Ritorna solo una parte della stringa

//  myString.lastIndexOf('a');

//  myString.trim();


/*
const sentence = ` Hello striver we are trying split method`
const splittedWords = sentence.split("");

console.log(splittedWords);
console.log(splittedWords.join(',       '));
console.log("asd".repeat(5));
console.log(Math.)  // Cercare le funzionalità della libreria Math!!
*/




//  let number = 4;

// FUNCTION DEFINITION

/*
Il "return" viene utilizzato quando bisogna usare il valore creato dalla funzione in 
un'altra parte del codice, come quando si eseguono dei calcoli.
Non viene usato se la funzione deve fare solo una "task"/


const squareFunction = function(num){
    // BODY OF THE FUNCTION = THE CODE OF THE FUNCTION
    const square = num * num;
    return square;
}

// FUNCTION EXECUTION

const resultOfSquareOfTwo = squareFunction(2);
const resultOfSquareOfFour = squareFunction(4);
const resultOfSquareOfSix = squareFunction(6);
const resultOfSquareOfFiveHoundred = squareFunction(500);

console.log("2 * 2:",resultOfSquareOfTwo);
console.log("4 * 4:",resultOfSquareOfFour);
console.log("6 * 6:",resultOfSquareOfSix);
console.log("500 * 500:",resultOfSquareOfFiveHoundred);

// DEFINE A FUNCTION WITH PARAMETERS (COMPLETARE!!!!!)

/*
const makeNoise = function(noise){
    console.log(noise);
}

makeNoise()
*/

// DEFINE A FUNCTION WITH ZERO PARAMETERS

/*
const makeNoise = function(){
    console.log("BARKS");
}

makeNoise()
*/

// DEFINE A FUNCTION WITH MULTIPLE PARAMETERS (DA COMPLETAREEE!!!!!)

/*
const sum = function(a, b){
    return a+b;
}

console.log(sum(100, 213123431321)) // a = 100, b = 213123431321
console.log(sum(12323,43434))   // a = 12323, b = 43434
*/

// Scopes

let x = 10;

if (true){
    let y = 20
    let z = 30
    console.log()
}

console.log(y+z)


// OTHER DECLARATIONS

const sum = function(a, b){
    let localSum = a+b
    return localSum
}

const sum2 = function(a, b){
    let localSum = a+b
    return localSum
}

const square = x => x * x