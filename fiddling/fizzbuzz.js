/* Classic FizzBuzz exercise
Print all numbers between 1 and 100, replacing multiples of 3 with "fizz",
multiples of 5 with "buzz", and multiples of 3 and 5 with "fizzbuzz".
*/

var i;
var state;

for (i=1;i<=100;i++){
  if(i%3==0){
    if(i%5==0){
        console.log("fizzbuzz");
    }else{
      console.log("fizz");
    }
  }else if(i%5==0){
    console.log("buzz");
  }else{
    console.log(i);
  }
}
