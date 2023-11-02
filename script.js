// Javascript deer comment uusgeh - “comments make code readable”
// Utag onoogui huvisagch zarlah / utag onooson huvisagch zarlah
// first name, last name, country, email gsn nertei huvisagch zarlaj, tus burd ni utag onooj uguh ba console deer haruulah
// Гурвалжингийн периметрийг олох
// Toirgiin talbai oloh
// Tegsh untsugtnii talbai oloh
// 2 too g hasaj, nemj, urjij, huvaaj uzeh, hari ug console deer gargah
// Doorh huvisagchiin data types iin comment eer todorhoiloh
	

//       let length = 16;
// let lastName = "Johnson"; 
// const x = {​
//     firstName: "John",
//   lastName: "Doe"
// }​;



// Comments make code readable 
let variable = undefined;
    firstName = "Aira"; 
    lastName = "Toivgoo";
    country = "Mongolia";
    email = "aira@gmail.com"

//PERIMETER 
let x = 5;
let y = 6;
let perimeter = 2*(x+y)


//TOTAL AREA OF A CIRCLE 
let r = 10;
let pi = Math.PI;
let area = (r)^2*Math.PI


//AREA OF A SQUARE 
let w = 4;
let squarearea = w^2

//loop till 100
for (let i = 1; i < 101; i++) {
    console.log("Loop number" + i);
  }

//loop passwords until the word "sesame" appears 
let secret;
do {
 secret = prompt("secret ee oruulna uu");
} while (secret !== "sesame");
alert("Amjilttai nevterlee")

//pinecone_easy_2
let sum = 0;
for (let num=1; num <= 35; num++){
    if (num % 2 ==0){
        sum += num;
    }
}
console.log("The sum of even numbers within 35 is " + sum)

//pinecone_easy_3
let sum = 0; 
for(let num=1; num<=3; num++){
    if (num <=3){
        sum  += num;
    }
}
console.log("The sum of all the numbers within the number is " + sum)

let sum = 0
let num = 3; 
for(let i=1; i <=num; i++){
    if(i<=num){
        sum += i
    }
}
console.log("The sum of all the numbers within the number is " + sum)

//pinecone_easy_4

let input = 5
let power = 10;
// let ans = Math.pow(num, power);
if (input >1000){
    console.log("2 to the power of 10 is more than 1000 because the answer is + ",input );
}  
else if (input > 1){
    console.log("2 to the power of 10 is less than 1000 because the answer is +",input );
}
else {
for (let i = 1 ; i <= power;i++) {
    input = input * input ;
}
console.log("2 to the power of 10 is more than 1000 because the answer is ",input );
console.log(input)
}


let ans = Math.pow(num, power);
let num = 2; 
for(let power = 1; power <= 10; power++){
    console.log("2 to the power of 10 is more than 1000 because the answer is " + ans)
}


let number = 2;
let power = 11; 
let ans = Math.pow(number, power);
if(ans > 1000){
    console.log("2 to the power of 10 is more than 1000 because the answer is " + ans);
} else {
    console.log("2 to the power of 10 is more than 1000 because the answer is " + ans)
}

