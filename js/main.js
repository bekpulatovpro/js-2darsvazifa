// + Addition
// Example
// var exampleAddition=5
// var resultAddition=exampleAddition+7;
// console.log(resultAddition)/work
// - substraction
// Example
// var exampeSubstraction=23;
// var resultSubstraction=exampeSubstraction-8;
// console.log(resultSubstraction)/ work
// * multiplication
// Example
// var exampleMultiplication=4;
// var resultMultiplication=exampleMultiplication*8;
// console.log(resultMultiplication)/work
// / division
// Example
// var exampleDivision=6;
// var resultDivision=exampleDivision*9;
// console.log(resultDivision)/work uraaa
// ** exponention daraja
// Example
// var exampleExponention=5;
// console.log(exampleExponention**2)/work
//  Increment and Decrement
//  var exampleIncrement=2;
//  exampleIncrement++
//  console.log(exampleIncrement)
//  console.log(exampleIncrement)
//  var exampleDecrement=5;
//  exampleDecrement--;
//  console.log(exampleDecrement)/work
//  % Modules
//  var exampleModule=5
//  console.log(exampleModule%2)/work
// tupeof
// var firstexample=5
// console.log(typeof example);
// var secondexample="5"
// console.log(typeof secondexample);
// var thirdexample=true;
// console.log(typeof thirdexample)/work
// Math objects
//  var mathfirstexample=5.9
//  console.log(Math.floor(mathfirstexample))
//  var mathfirstexample=5.9
//  console.log(Math.ceil(mathfirstexample))
//  var mathfirstexample=5.9
//  console.log(Math.random(mathfirstexample))
//  var mathfirstexample=5.2
//  console.log(Math.round(mathfirstexample))
//  var mathfirstexample=5.9234232334534625653543
//  console.log(mathfirstexample.toFixed(8))
/*var example = document.querySelector(".heading");
console.log(example);
example.textContent = "Lyuboy qiymat";
var secondExample = document.querySelector(".text");
console.log(secondExample);
secondExample.textContent="lorem ipsum dorem"
var thirdexample=document.querySelector('.title')
thirdexample.textContent="About you"
console.log(thirdexample)*/
// var bnma=document.querySelector(".second__title");
// console.log(bnma)
// bnma.textContent="Lyuboy"

//misolni ishlash
var alisher = document.querySelector(".alishers__title");

var moneyInput = Number(prompt("Mablag'ingizni kiriting"));
var fliyingUSD = 500;
var hotelUSD = 250;
var entertainmentEURO = 120;

var USD_to_SOUM = 9433.34;
var EURO_to_SOUM = 10354.03;

var allResult =
  fliyingUSD * USD_to_SOUM +
  hotelUSD * USD_to_SOUM +
  entertainmentEURO * EURO_to_SOUM;
if (allResult <= moneyInput) {
  alisher.textContent = "Oq yo'l, Alisher!";
} else {
  alisher.textContent = "Alisher, ozgina sabr qilish kerak bo'lar ekan";
}
