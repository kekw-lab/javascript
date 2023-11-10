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








//function_find long word_medium_1
function findLongestWord(sentence) {
  // Split the sentence into an array of words
  const words = sentence.split(' ');

  // Initialize a variable to store the longest word
  let longestWord = '';

  // Iterate through each word in the array
  words.forEach(function(word) {
    // Compare the length of the current word with the length of the longest word
    if (word.length > longestWord.length) {
      longestWord = word;
    }
  });

  // Return the longest word
  return longestWord;
}

// Example usage:
const sentence = "The quick brown fox jumps over the lazy dog";
const longestWord = findLongestWord(sentence);
console.log("Longest Word:", longestWord);

//function_mini calculator_medium_2
function calculateSum(a, b) {
  return a + b;
}

// Example usage:
const num1 = 10;
const num2 = 4;
const result = calculateSum(num1, num2);

console.log("The sum is:", result);



function calculateDifference(a, b) {
  return a - b;
}

// Example usage:
const num1 = 10;
const num2 = 4;
const result = calculateDifference(num1, num2);

console.log("The difference is:", result);


//function_remove vowels_medium_5
function removeVowels(sentence) {
  return sentence.replace(/[aeiouAEIOU]/g, '');
}

// Example usage:
const inputSentence = "This is an example sentence with vowels.";
const outputSentence = removeVowels(inputSentence);

console.log("Input Sentence:", inputSentence);
console.log("Output Sentence (without vowels):", outputSentence);


//function easy 1
function calculateCubeUsingExponentiation(number) {
  return number ** 3;
}

// Example usage:
const inputNumber = 5;
const cubeResult = calculateCubeUsingExponentiation(inputNumber);

console.log(`The cube of ${inputNumber} is: ${cubeResult}`);

//function easy 4
function calculateQuadraticEquation(x) {
  return x ** 2 + 5 * x + 6;
}

// Example usage:
const inputValue = 3;
const result = calculateQuadraticEquation(inputValue);

console.log(`For x = ${inputValue}, the result is: ${result}`);

//function easy 2
function calculateTriangleArea(a, b, c) {
  // Calculate the semi-perimeter
  const s = (a + b + c) / 2;

  // Calculate the area using Heron's formula
  const area = Math.sqrt(s * (s - a) * (s - b) * (s - c));

  return area;
}

// Example usage:
const sideA = 3;
const sideB = 4;
const sideC = 5;

const triangleArea = calculateTriangleArea(sideA, sideB, sideC);

console.log(`The area of the triangle with sides ${sideA}, ${sideB}, and ${sideC} is: ${triangleArea}`);



//loop easy 1
for (let i = 1; i <= 100; i++) {
  console.log(i);
}


//loop wasy 2
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Function to sum even numbers
function sumEvenNumbers(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      sum += arr[i];
    }
  }
  return sum;
}

// Example usage:
const sumOfEvenNumbers = sumEvenNumbers(numbers);

console.log("Sum of even numbers:", sumOfEvenNumbers);

//loop medium 1
const numbers = [10, 5, 8, 2, 7, 1, 15];

// Function to calculate the difference between the largest and smallest numbers
function calculateDifference(arr) {
  if (arr.length === 0) {
    return "Array is empty";
  }

  let maxNumber = arr[0];
  let minNumber = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > maxNumber) {
      maxNumber = arr[i];
    } else if (arr[i] < minNumber) {
      minNumber = arr[i];
    }
  }

  return maxNumber - minNumber;
}

//loop medium two 
function printAsteriskPattern(n) {
  for (let i = 1; i <= n; i++) {
    let row = '';
    for (let j = 1; j <= i; j++) {
      row += '*';
    }
    console.log(row);
  }
}

// Example usage:
const inputNumber = 3;
printAsteriskPattern(inputNumber);


// Example usage:
const difference = calculateDifference(numbers);

console.log("Difference between the largest and smallest numbers:", difference);



//nested loop easy only 
function printPattern1() {
  for (let i = 1; i <= 5; i++) {
    let row = '';
    for (let j = 1; j <= 5; j++) {
      row += '* ';
    }
    console.log(row);
  }
}

function printPattern2() {
  for (let i = 1; i <= 5; i++) {
    let row = '';
    for (let j = 1; j <= 5; j++) {
      if (i === 3 && j === 3) {
        row += '+ ';
      } else {
        row += '* ';
      }
    }
    console.log(row);
  }
}

function printPattern3() {
  for (let i = 1; i <= 5; i++) {
    let row = '';
    for (let j = 1; j <= 5; j++) {
      if (j === 3) {
        row += '+ ';
      } else {
        row += '* ';
      }
    }
    console.log(row);
  }
}

function printPattern4() {
  for (let i = 1; i <= 5; i++) {
    let row = '';
    for (let j = 1; j <= 5; j++) {
      if (i === 3 || j === 3) {
        row += '+ ';
      } else {
        row += '* ';
      }
    }
    console.log(row);
  }
}

function printPattern5() {
  for (let i = 1; i <= 5; i++) {
    let row = '';
    for (let j = 1; j <= 5; j++) {
      if (i === 3 || j === 3 || (i === 5 && j % 2 === 0)) {
        row += '+ ';
      } else {
        row += '* ';
      }
    }
    console.log(row);
  }
}

// Example usage:
console.log("Pattern 1:");
printPattern1();

console.log("\nPattern 2:");
printPattern2();

console.log("\nPattern 3:");
printPattern3();

console.log("\nPattern 4:");
printPattern4();

console.log("\nPattern 5:");
printPattern5();


//nested loop medium 

