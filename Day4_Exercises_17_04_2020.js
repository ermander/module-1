/*
ASSIGNMENT RULES
- All the answers must be in JavaScript
- The solution must be pushed to the repository and be available for the tutors by the end of the day
- You can ask for tutor's help
- You can google / use StackOverflow BUT we suggest you to use just the material provided
*/
​
/* EXERCISE 1
Write a function "area" which receives 2 parameters (l1,l2) and calculate the area of the rectangle.
*/


/*

let area = function(l1, l2){
    if(l1!=l2){
        return l1*l2;
    }else{
        return "The numbers are not valid, this is not a rectangle!";
    }
}
console.log(area(2, 4));

*/


/* EXERCISE 2
Write a function "crazySum" which receives two given integers. If the two values are same, then returns triple their sum.
*/
​

/*

let crazySum = function(firstInteger, secondInteger){
    if(firstInteger===secondInteger && Number.isInteger(firstInteger)===true && Number.isInteger(secondInteger)===true){
        return (firstInteger+secondInteger)*3;
    }else if(firstInteger!=secondInteger && Number.isInteger(firstInteger)===true && Number.isInteger(secondInteger)===true){
        return "The numbers are not the same!";
    }else{
        return "Error! You can not use those values! ";
    }
}

console.log(crazySum(2, 2));
console.log(crazySum(2, 4));
console.log(crazySum(2, 2.1));

*/


/* EXERCISE 3
Write a function "crazyDiff" that computes the 
absolute difference between a given number and 19. 
Returns triple their absolute difference if 
the specified
number is greater than 19.
*/
​

/*
const crazyDiff = function(number){
    let difference = number-19;
    if(number>19){
        let trippleDifference = difference*3;
        return trippleDifference;
    }    
}

console.log(crazyDiff(21));

*/


/* EXERCISE 4
Write a function "boundary" which accept an integer N and returns true if N is within 20 and 100 (included) or equal to 400.
*/
​

/*

const boundary = function(N){
    if((N>=20 && N<= 100 && Number.isInteger(N)===true) || (N===400 && Number.isInteger(N)===true)){
        return true;
    }else if((N>=20 && N<= 100 && Number.isInteger(N)===false) || (N===400 && Number.isInteger(N)===false)){
        return "The value insert is not an integer!";
    }else{
        return "The value insert is not valid!";
    }
}

console.log(boundary(21));
console.log(boundary(400));
console.log(boundary(21.2));
console.log(boundary(101));

*/


​
/* EXERCISE 5
Write a function "strivify" which accepts a string S. 
Add to S "Strive" in front of a given string, 
if the given string begins with "Strive" then return the original string.
*/

const strivify = function(S){
    ​
/* WRITE YOUR CODE HERE */
​
/* EXERCISE 6
Write a function "check3and7" which accepts a positive number and check if it is a multiple of 3 or a multiple of 7.
HINT: Module Operator
*/

/*
const check3and7 = function (num){
    if((num%3===0 && num%7!=0) && num>0){
        return "The number is a multiple of 3!";
    }else if((num%3!=0 && num%7===0) && (num>0)){
        return "The number is a multiple of 7!";
    }else if((num%3===0 && num%7===0) && (num>0)){
        return "The number is a multiple of 3 and 7!"
    }else if(((num%3===0 && num%7!=0) || (num%3!=0 && num%7===0) || (num%3===0 && num%7===0)) && (num<=0)){
        return "The insert number is not a positive number!";
    }else{
        return "The number is not a multiple of 3 or 7";
    }  
}

console.log(check3and7(3));
console.log(check3and7(7));
console.log(check3and7(21));
console.log(check3and7(0));
console.log(check3and7(4));
*/
​

/* EXERCISE 7
Write a function "reverseString" to reverse programmatically a given string (es.: Strive => evirtS).
*/
​

/*
const reverseString = function(string){
    const splitString = string.split("")
    const reverseArray = splitString.reverse("")
    const joinArray = reverseArray.join("")
    return joinArray
}

let reversedString = reverseString("Strive")
console.log(reversedString)
*/

​

/* EXERCISE 8
Write a function "upperFirst" to capitalize the first letter of each word of a 
given string passed as parameter
*/
function upperFirst(sentence) {
    let words = sentence.split(' ')
    let upperWords = words.forEach(function(word) {
        return word.toUpperCase()
    })
    return upperWords.join(' ')
}
​
/* WRITE YOUR CODE HERE */
​
/* EXERCISE 9
Write a function "cutString" to create a new string without the first and last character of a given string.
*/
​
/* WRITE YOUR CODE HERE */
​
/* EXERCISE 10
Write a function "giveMeRandom" which accepts a number n and returns an array containing n random numbers between 0 and 10
*/
​
/* WRITE YOUR CODE HERE */
​
​
/* WHEN YOU ARE FINISHED
Commit and push the code to your personal GitHub repository and share the link to your commit with your tutor.
*/