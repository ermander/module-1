const totalShoppingCart = 50;
let totalShoppingCartNoFreeShip;

if(totalShoppingCart<=50){
    totalShoppingCartNoFreeShip=totalShoppingCart + 10;
    console.log("The total cost with shipping is : €", totalShoppingCartNoFreeShip);
}else{
    console.log("The cost of shipping is free!");
}