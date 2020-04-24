// 30) Create a function that gets 2 arrays of numbers and returns the one with the higher sum of values

let myArrayOfNumbers1=[], myArrayOfNumbers2=[];
myArrayOfNumbers1.length=(Math.floor(Math.random()*10));
myArrayOfNumbers2.length=(Math.floor(Math.random()*10));

for(let i=0; i<myArrayOfNumbers1.length; i++){
    myArrayOfNumbers1[i]=(Math.floor(Math.random()*10));
}

for(let i=0; i<myArrayOfNumbers2.length; i++){
    myArrayOfNumbers2[i]=(Math.floor(Math.random()*10));
}

console.log(myArrayOfNumbers1);
console.log(myArrayOfNumbers2);

let higherSum=function(x){
    let sum=0;
    for(let i=0; i<x.length; i++){
        sum=+x[i];        
    }
    return sum;
}
let totalSum=higherSum(myArrayOfNumbers2);
console.log(totalSum);

console.log(sum([1,2,3])); 




