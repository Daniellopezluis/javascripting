//Experimenting with Objects and Constructors in JS

/*Create 10 cars, where each car has a color and a number. The cars should be numbered in order
from 0 to 9. The cars from 0 to 4 should be colored "green" and the cars from 5 to 9 should be
colored "blue". Place the cars in order in an array called carGarage.
*/

// create a car constructor function
var Car = function(color, number){
    this.color = color;
    this.number = number;
};
    
// create a carGarage arrayv
var carGarage =  [];

// create a loop that creates cars and places them in carGarage
for (var i=0; i<10; i++){
    if(i < 5){
        carGarage.push(new Car("green",i));
    }else{
        carGarage.push(new Car("blue",i));
    }
}

// test code
for(var i=0;i<carGarage.length;i++){
    car = carGarage[i];
    print(car.color + " car #" + car.number);
}

