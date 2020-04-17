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
const areaRectangle=function(l1, l2){
    const area=l1*l2
    return area
}

let resultAreaRec=areaRectangle(10,15)
console.log("The area of the rectangle is: ", resultAreaRec)
*/


/* EXERCISE 2
Write a function "crazySum" which receives two given integers. If the two values are same, then returns triple their sum.
*/
​

/*
const crazySum = function(integers1, integers2){
    if(integers1===integers2){
        const triple = (integers1+integers2) * 3
        return triple        
    }
}

let resultTriple = crazySum(2,2)
console.log(resultTriple)
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
    let difference = number-19
    if(number>19){
        let trippleDifference = difference*3
        return trippleDifference
    }    
}

let isTrippleDifference = crazyDiff (21)
console.log(isTrippleDifference)
*/


/* EXERCISE 4
Write a function "boundary" which accept an integer N and returns true if N is within 20 and 100 (included) or equal to 400.
*/
​

/*
const boundary = function(integer){
    if(integer>=20 && integer<= 100 || integer===400 ){
        return true
    }else{
        const notTrue = "The value insert is not valid!"
        return notTrue
    }
}

let confrontation = boundary(400)
console.log(confrontation)
*/


​
/* EXERCISE 5
Write a function "strivify" which accepts a string S. Add to S "Strive" in front of a given string, if the given string begins with "Strive" then return the original string.
*/
​
/* WRITE YOUR CODE HERE */
​
/* EXERCISE 6
Write a function "check3and7" which accepts a positive number and check if it is a multiple of 3 or a multiple of 7.
HINT: Module Operator
*/

/*
const check3and7 = function (num){
    if(num%3===0 && num%7!=0){
        const multipleOf3 = "The number is a multiple of 3!"
        return multipleOf3
    }else if(num%3!=0 && num%7===0){
        const multipleOf7 = "The number is a multiple of 7!"
        return multipleOf7
    }else if(num%3===0 && num%7===0){
        const multipleOfBoth = "The number is a multiple of 3 and 7!"
        return multipleOfBoth
    }else{
        const multipleOfNone = "The number is not a multiple of 3 or 7!"
        return multipleOfNone
    }  
}

let confrontation = check3and7(2)
console.log(confrontation)
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
Write a function "upperFirst" to capitalize the first letter of each word of a given string passed as parameter
*/
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