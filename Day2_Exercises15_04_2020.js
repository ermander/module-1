/*
ASSIGNMENT RULES
- All the answers must be in JavaScript
- You can ask for tutor's help
- The solution must be available for the tutors by the end of the day
- You can google / use StackOverflow BUT we suggest you to use just the material provided
- You can test your code in a separate file or commenting the single parts in this file or directly in the Developer Console or in the Node Console.
*/


/* EXERCISE 1
Write the code to execute a SUM between the number 12 and 20
*/



console.log(12 + 20)

// or...

let addendo1 = 12, addendo2 = 20, somma = addendo1 + addendo2;
console.log(somma)



/* EXERCISE 2 
Create a variable named X containing the number 12
*/



let X = 12;




/* EXERCISE 3
Create a variable named name containing the string John Doe
*/



let name = "John Doe";




/* EXERCISE 4
Execute a DIFFERENCE between the number 12 and the variable X, which stores the value 12
*/



let X = 12, differenza = X - 12;
console.log(differenza)

//  Or...

let X = 12;
console.log(X - 12)




/* EXERCISE 5
Create two variables: name1 and name 2. name1 is equal to john, name2 is equal to John.
Verify that name1 is different from name2. 
Verify then, that name1 and name2 are equals if both lowercase (without changing the value of name2)
*/



let name1 = "john", name2 = "John";

if(name1!==name2){
    console.log("name1 is different from name2!")
    console.log("--------------")
}else{
    console.log("name1 is equal from name2!")
    console.log("--------------")
}

if(name1===name2.toLowerCase()){
    console.log("Now name1 and name 2 are equal!")
}else{
    console.log("they are still not the same! ")
}




/* EXERCISE 6
Create the variable X (value less than 10). Write the code to print the literal value of the given number (ex.: 1 => one, 5 => five)
*/



let X = 9;

if(X===1){
    console.log("1-->one")
}else if(X===2){
    console.log("2-->two")
}else if(X===3){
    console.log("3-->three")
}else if(X===4){
    console.log("4-->four")
}else if(X===5){
    console.log("5-->five")
}else if(X===6){
    console.log("6-->six")
}else if(X===7){
    console.log("7-->seven")
}else if(X===8){
    console.log("8-->eight")
}else if(X===9){
    console.log("9-->nine")
}else{
    console.log("The given value is not correct")
}




/* EXERCISE 7
Insert a value in a variable based on the resut of a ternary if
*/



let name1 = "john", name2 = "John";
let name1IsEqualToname2 = (name1===name2 ? "name1 è uguale a name2" : "name1 è diversa da name2")
console.log(name1IsEqualToname2)




/* WHEN YOU ARE FINISHED
Send the code via Slack to the tutor! In the next days we'll also learn how to use GIT 
*/