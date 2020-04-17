/* EXERCISE 7
Write a function "reverseString" to reverse programmatically a given string (es.: Strive => evirtS).
*/

const reverseString = function(string){
    const splitString = string.split("")
    const reverseArray = splitString.reverse("")
    const joinArray = reverseArray.join("")
    return joinArray
}

let reversedString = reverseString("oiddocroP")
console.log(reversedString)
