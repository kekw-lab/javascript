//1. Store multiple values in an array 


const shoppingList = ["bread", "strawberry", "tshirt"];
shoppingList[0]


const words = ["hello", "world"];

words[2] = "welcome";
words[0] = "nest";
Words function ==> words.push(), words.unshift() +++
                   words.pop(), words.shift() ---

                   index and element difference
words.length 



//assignment_1 easy_array
const numbers = [10, 20, 30, 40, 50];

let sum = 0; 
let average;
for(let i = 0; i < numbers.length; i++){
    console.log(i, numbers[i])
    sum += numbers[i];
}
average = sum / numbers.length
console.log(average);

//assignment_2 easy_array
const numbers = [10, 20, 30, 40, 50];
numbers[5] = 30;
console.log(numbers)

const numbers = [10, 20, 30, 40, 50];
numbers.pop()
numbers.push(90)
console.log(numbers)

//assignment_3 easy_array
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

let sum = 0;
const numbers = [2, -3, 5, 6, -8, 10];
for(let i = 0; i > 0; i++){
    console.log(numbers[i] > 0)
}



const numbers = [2, -3, 5, 6, -8, 10];
function sumPositiveEvenNumbers(array) {
  let sum = 0;

  for (let i = 0; i < array.length; i++) {
    if (array[i] > 0 && array[i] % 2 === 0) {
      sum += array[i];
    }
  }
  return sum;
}
const result = sumPositiveEvenNumbers(numbers);
console.log("The sum of positive and even numbers is: " + result);



const numbers = [2, -3, 5, 6, -8, 10];
function sumOfeven(array){
    let sum = 0; 
    for(let i = 0; i < array.length; i++){
        if(array[i] > 0 && array[i] % 2 === 0){
            sum += array[i];
        }
    }
    return sum;
}
const result = sumOfeven(numbers);
console.log("The sum of positive and even numbers is: " + result);

//assignment_1 medium_array 
const numbers = [1, 2, 3, 4, 5, 6, 7, 8];
