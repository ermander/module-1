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