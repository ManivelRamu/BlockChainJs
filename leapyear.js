//1.Javascript Ecercise

//install npm prompt
//Create a function
//check leap year condition
//get user input and print the output

 const prompt = require("prompt-sync")();
 
function leap(year){
    if ((0 ===year % 4)&&(year%100!=0)||(year%400==0)){
    console.log(year+'is a leap');
} 
else{
    console.log("Not a leap year");
}
}
const year=prompt("Enter the year")
leap(year);
//------------------------------------------------------------------

//2.Javascript Excercise

//Factorial of a number
//initialize a variable
//For loop to decrement the value 
//print the total
var total=1
function Factorial(num){
    for(let i=1;i<=num;i++){
          total=total*i
      }
      console.log(`the factorial is ${total}`);
}
const num=prompt("enter a number:")
Factorial(num)

//----------------------------------------------------------

//c/5 = (f-32)/9
//3.Celcius to Farenheit
function Celcius(val){
    var cel = val * 9 / 5 + 32;
    var far=(val - 32) * 5 / 9;

console.log(`celcius is${cel}`);
console.log(`Farenheit is ${far}`);
}
const val=prompt("enter a number:")
Celcius(val)
