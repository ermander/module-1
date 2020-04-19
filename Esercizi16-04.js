/*
ASSIGNMENT RULES
- All the answers must be in JavaScript
- The solution must be pushed to the repository and be available for the tutors by the end of the day
- You can ask for tutor's help
- You can google / use StackOverflow BUT we suggest you to use just the material provided
- You can test your code in a separate file or commenting the single parts in this file or directly in the Developer Console or in the Node Console.
*/
​
/* EXERCISE 1
Create and array with the first 5 positive numbers
*/
​
// let myarray = [1, 2 ,3 ,4 ,5 ];
​
/* EXERCISE 2
Create an object containing your name, surname, email address and age.
*/
​
/*
const myObject {
    name: "Emanuele",
    surname: "Bertuol",
    email: "emanuelebertuol@gmail.com",
    age: 22,
};
​*/

/* EXERCISE 3
Add to the previously created object a boolean value to rappresent wheter you have or not a driving license
*/
​
/*
const myObject {
    name: "Emanuele",
    surname: "Bertuol",
    email: "emanuelebertuol@gmail.com",
    age: 22,
    haveDriveLicense: true,
};
*/
​
/* EXERCISE 4
Remove from the previously created object the age
*/
​
// delete myObject1.age;
​
/* EXERCISE 5
Create a second object with name, surname, email address and verify that this object has a different email address
*/
​
/*
const myObject1 {
    name: "Emanuele",
    surname: "Bertuol",
    email: "emanuelebertuol@gmail.com",
    age: 22,
    haveDriveLicense: true,
};

const myObject2 {
    name: "Enrico",
    surname: "De Vicari",
    email: "enricodevicari@gmail.com",
};

if(myObject2.email===myObject1.email){
    console.log("myObject2 has the same email!");
}else{
    console.log("myObject2 has a different email!")
}
*/
​
/* EXERCISE 6
You are working for a eCommerce. In the variable totalShoppingCart you have the total amount spent by the current user.
In your eCommerce you have a promotion: if the customer shopping cart is more than 50€, they can have free shipping (otherwise it costs 10€).
Write an algorithm that calculate totalCost based on this assumption.
*/
​
/*
const totalShoppingCart = 50;
let totalShoppingCartNoFreeShip;

if(totalShoppingCart<=50){
    totalShoppingCartNoFreeShip=totalShoppingCart + 10;
    console.log("The cost of shipping is : ", totalShoppingCartNoFreeShip);
}else{
    console.log("The cost of shipping is free!");
}
​*/

/* EXERCISE 7
You are working for the same eCommerce. Today is the black friday and everything has a 20% discount at the end of the purchase.
Modify the previous answer inserting this information and, applying the same rules for the shipping cost, calculate the totalShopping.
*/
​
/*
const totalShoppingCart = 50;
let totalShoppingCartNoFreeShip;

if(totalShoppingCart<=50){
    totalShoppingCartNoFreeShip=totalShoppingCart + 10;
    console.log("The cost of shipping is : ", totalShoppingCartNoFreeShip);
}else{
    console.log("The cost of shipping is free!");
}
*/
​
/* EXERCISE 8
Create an object rapresenting a car with properties like brand, model, licensePlate.
After you create the first car, clone it and change the licensePlate without affecting the original car.
Do it for five cars.
*/

/*
let car1 = {
    brand: "Fiat",
    model: "Panda",
    licensePlate: "AX644585KI",
};

let car2 = {};
let car3 = {};
let car4 = {};
let car5 = {};
let car6 = {};

Object.assign(car2, car1);
Object.assign(car3, car1);
Object.assign(car4, car1);
Object.assign(car5, car1);
Object.assign(car6, car1);

car2.licensePlate = "AX654585KI";
car3.licensePlate = "AX664585KI";
car4.licensePlate = "AX674585KI";
car5.licensePlate = "AX684585KI";
car6.licensePlate = "AX694585KI";

console.log(car1);
console.log(car2);
console.log(car3);
console.log(car4);
console.log(car5);
console.log(car6);
​*/

/* EXERCISE 9
Create a new array called carsForRent containing all the cars from the previous exercise
*/
​
/* WRITE YOUR CODE HERE */
​
/* EXERCISE 10
Remove the first and the last car from the carsForRent array.
*/
​
/* WRITE YOUR CODE HERE */
​
/* EXERCISE 11
Print in the console, the types of a single car, of the car licensePlate and of the brand
*/
​
/* WRITE YOUR CODE HERE */
​
/* EXERCISE 12
Create a new array called carsForSale and insert 3 cars in it.
Store in the variable totalCars the number of cars in both carsForSale and carsForRent arrays
*/
​
/* WRITE YOUR CODE HERE */
​
/* EXERCISE 13
Print in the console the data from each car in the carsForSale array
*/
​
/* WRITE YOUR CODE HERE */
​
/* WHEN YOU ARE FINISHED
Send the code via Slack to the tutor! In the next days we'll also learn how to use GIT 
*/