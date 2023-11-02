//nested loop: create stars in response to a number 
let nestednum = 5;
let j = "*";

for(let i = 1; i <= nestednum; i++){
    // for(let p = j){
    //     const product = p * i;)
    // }
    // console.log("j", j)
    // for(let j = 1, j <= 6; j++){
    //     const product = i * j;
    //     console.log(product)
    // }
}

const height = 5; 

for (let i = 1; i <= height; i++) {
  let row = '';
  for (let j = 1; j <= i; j++) {
    row += '*';
  }
  console.log(row);
}


const height = 5; 
//number of rows 
for (let i = height; i >= 1; i--) {
//number of rows is equak to the height, should be more or equal to 1, should decrease in number
  let row = '';
//build each row in the triangle
  for (let j = 1; j <= i; j++) {
//
    row += '*';
//the variabes in the row are indicated as "*"
  }
  console.log(row);
}

//BREAK AND CONTINUE 
let text = ""
for (let i = 1, i <= 10, i++){
  if (num == 6); 
  break;{
    text = "The number is" + num;
  }
}

//example 1 
const str ="Life, the universe the everything.";
console.log(str.substring(4, 10));

//example 2
function greet(name){
  console.log("hello", name)
}
greet("Naraa")
greet("Jack")

//example 3
function greet(givenname, surname){
  // console.log("hello", givenname, surname)
  return "hello, there" + givenname + surname;
}
// let input = greet("Naraa", 0)
// console.log("input", input)

const formattedGreeting = greet("naraa", "gegee");
console.log(formattedGreeting.toUpperCase())

function cube(a){
  const para = a ** 3;
  console.log(para)
}
cube = (3);
console.log("The answer is" + cube)


function findcube(a) {
  const cube = a **3
  return cube
}
console.log(findcube(3))


function quadrat(num) {
  return num * num 
}
console.log(quadrat(4))




//THURSDAY CODE
//find the bigger number amongst two numbers 
function twoNumbers(a, b) {
  if (a > b) {
    return a;
  } else {
    return b;
  }
}

number1 = 12;
number2 = 8;

largerNumber = twoNumbers (number1, number2);

console.log("The bigger number is: " + largerNumber);

//determine if a number is even or odd 
function evenNumber (number) {
  if (number % 2 === 0) {
    return true;
  } else {
    return false;
  }
}

randomNumber = 10;
result = evenNumber (randomNumber);

if (result) {
  console.log(randomNumber + " is even.");
} else {
  console.log(randomNumber + " is not even.");
}

//find the given arrays mean number 
arrayInput = [1, 2, 3, 4]; //mean = 5
arraysum = 0;
for(let i = 0; i < arrayInput.length; i++){
  arraysum += arrayInput[i];
}
console.log(arraysum)

arrayInput = [1, 2, 3, 4]; //mean = 5
function meanFunction(arrayInput){
  let sum = 0;
  for(let i = 0, i < arrayInput.length, i++){
    sum += array[i]
  }
  return sum = arrayInput.length / 2;
}
let arrayInput(1, 2, 3, 4);

//find the given arrays sum 
arrayInput = [1, 2, 3, 4, 5]; //sum = 15
arraySum = 0;
for(let i = 0; i < arrayInput.length; i++){
  arraySum += arrayInput[i];
}
console.log(arraySum)