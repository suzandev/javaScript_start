// var onionPrice = 20;
// var eggPrice = 10;

// var totalPrice = onionPrice + eggPrice;

// console.log(totalPrice);

// var priceDifference = onionPrice - eggPrice;

// console.log(priceDifference);

// Multiplication
// var orangePrice = 20;
// var quantity = 7;

// var totalCost = orangePrice * quantity;
// console.log(totalCost);

// division

// var money = 500;
// var player = 10;
// var eachPlayer = money / player;
// console.log(eachPlayer);

// // shortHand

// var money = money + 10;

// money += 10;

// console.log(money);

//  ===== convert string to number =====

// var price1 = "32";
// var price2 = "10.46";

// var price3 = parseInt(price1);
// console.log(price3);

// var price4 = parseFloat(price2);
// console.log(price4);

// ====== array start =======

// var friendsAge = [11, 21, 45, 14, 105, 6];
// // akta array er moddho koiti element ache janar jonno .length
// console.log(friendsAge.length);

// var numbers = [45, 68, 78, 56, 89, 98];
// //  akta array er moddho koto tomo jaigai ache janar jonno [];
// console.log(numbers[2]);

// // kotomo position ache oita khuje pete  indexOf()

// var indexPosition = numbers.indexOf(78);
// console.log(indexPosition);

// ========= multiple condition =========

// var isGraduated = true;
// var salary = 75000;
// var cars = 1;

// if (isGraduated == true && salary > 50000 && cars >= 1) {
//   console.log("yea you have a gradient");
// } else {
//   console.log("you have not gradient");
// }

// var isGraduated = true;
// var salary = 75000;
// var cars = 1;

// // jekono akta true hoylei hobe
// if (isGraduated === true || salary > 50000 || cars >= 1) {
//   console.log("yea you have gradient");
// } else {
//   console.log("you have not gradient");
// }
// // 2nd example
// if (isGraduated === true && (salary > 50000 || cars >= 1)) {
//   console.log("yea you have gradient");
// } else {
//   console.log("you have not gradient");
// }

// ======== multi stage conditions

// var money = 65;
// var danishPrice = 45;
// var butterBread = 35;
// var toastBiscuit = 20;

// if (danishPrice < money) {
//   console.log("Dan Dan danish khamu");
// } else if (butterBread < money) {
//   console.log("Butter bon khamu");
// } else if (toastBiscuit < money) {
//   console.log("Toast Biscuit khamu");
// } else {
//   console.log("Tea Party hobe only");
// }

// ======== nested conditions

// var math = true;
// var geometry = true;
// var straightLint = false;

// if (math == true) {
//   if (geometry == true) {
//     if (straightLint == true) {
//     } else {
//       console.log("baka pothe cholte parba na");
//     }
//   } else {
//     console.log("pithagorous hoite parba na");
//   }
// }

// task 1
// var fruits = ["Apple", "Banana", "Orange"];

// var fruits2 = fruits[1];
// fruits[1] = "Mango";
// fruits[2] = "Watermelon";

// console.log(fruits1);

// task - 2

// var actualMarks = 20;

// if (actualMarks >= 80) {
//   console.log("A");
// } else if (actualMarks >= 60) {
//   console.log("B");
// } else if (actualMarks >= 50) {
//   console.log("C");
// } else if (actualMarks >= 40) {
//   console.log("D");
// } else if (actualMarks >= 33) {
//   console.log("E");
// } else {
//   console.log("you failed in your exam");
// }

// ========loop start ========

// task 1 =  Display "ajke amar mon valo nei" for 39 times

/*
for (var i = 1; i <= 39; i++) {
  console.log("ajke amar mon valo nei", i);
}
*/

// task 2 Display numbers between 58 to 98

/*
for (var i = 58; i <= 98; i++) {
  console.log(i);
}
console.log("*****only for even numbers from 412 to 456****");
*/

// // task 3 = Show all even numbers from 412 to 456

/*
for (var i = 412; i <= 456; i++) {
  if (i === 412) {
    console.log(i + " is even number");
  } else if (i % 2 === 0) {
    console.log(i + " is even number");
  }
  //   else {
  //     console.log(i + " is odd number");
  //   }
}

console.log("*****only for odd numbers from 581 to 623****");
*/

// task 4 = Show all odd numbers from 581 to 623

/*
for (var i = 581; i <= 623; i++) {
  if (i % 2 != 0) {
    console.log(i + " is odd number");
  }
}

console.log(
  "*****Declare an array for all the topics that you have learned last few days and display****"
);

*/

// task 6 = Declare an array for all the topics that you have learned last few days and display then as output

/*
var myJourney = [
  "Html3",
  "Css",
  "Html5",
  "Css3",
  "Tailwind Css",
  "DaisyUi",
  "Javascript",
  "Condition",
  "String",
  "Array",
  "Loop",
];

for (var i = 0; i < myJourney.length; i++) {
  var myResult = myJourney[i];
  console.log(myResult);
}
*/

// ======== object start ========

/*
var shoppingCart = {
  books: 3,
  sunglass: 1,
  keyboard: 5,
  mouse: 1,
  pen: 25,
  shoes: 2,
  bottle: 1,
};

const keys = Object.keys(shoppingCart);
console.log(keys);

const values = Object.values(shoppingCart);
console.log(values);

for (let i = 0; i < keys.length; i++) {
  let propertyName = keys[i];
  let propertyValue = shoppingCart[propertyName];
  console.log(propertyName, propertyValue);
}

*/

/*

function isEven(number) {
  const remainder = number % 2;

  if (remainder === 0) {
    return console.log("number is even");
  } else {
    return console.log("number is odd");
  }

  // console.log(remainder);
}

const myNumber = isEven(303);
console.log(myNumber);

*/

// ======== array odd number sum =========

/*
function getSumOfArray(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    const index = i;
    const element = arr[index];
    sum = sum + element;
  }
  return sum;
}

// collect odd numbers
function getOddNumbers(numbers) {
  let oddNumbers = [];
  for (let i = 0; i < numbers.length; i++) {
    const index = i;
    const element = numbers[index];
    if (element % 2 !== 0) {
      oddNumbers.push(element);
    }
  }
  return oddNumbers;
}

const myNumbers = [12, 65, 45, 78, 32, 45, 91];
const collectOddNumbers = getOddNumbers(myNumbers);
console.log(collectOddNumbers);

const oddNumbersSum = getSumOfArray(collectOddNumbers);
console.log("total odd numbers sum: ", oddNumbersSum);

*/

/*
// 1-9 numbers sum 
function sumOfNumbers(numbers) {
  let sum = 0;
  for (let i = 1; i <= numbers; i++) {
    sum = sum + i;
    console.log(i, sum);
  }
  return sum;
}

const resultSum = sumOfNumbers(9);
console.log("total result of sum: ", resultSum);

*/

/*
// 9 numbers multiplication sum
function sumOfNumbers(numbers) {
  let sum = 1;
  for (let i = 1; i <= numbers; i++) {
    sum = sum * i;
    console.log(i, sum);
  }
  return sum;
}

const resultSum = sumOfNumbers(9);
console.log("total result of sum: ", resultSum);
*/

// ======== nested loop collect form jonas sir
/*
for (let exercise = 1; exercise <= 5; exercise++) {
  console.log(`------Starting Exercise ${exercise}`);

  for (let rep = 1; rep <= 5; rep++) {
    console.log(`exercise ${exercise} Lifting weight repetition ${rep} 🏃‍♂️`);
  }
}
*/

// ======== collect to right age right now for jonas sir ========
/*
const years = [1991, 2007, 1969, 2020];
const ages = [];

for (let i = 0; i < years.length; i++) {
  ages.push(2023 - years[i]);
}
console.log(ages);

*/

// ======== object collect form jonas sir ========

/*
const jonas = {
  firstName: "jonas",
  lastName: "Schmedtmann",
  age: 2037 - 1991,
  job: "teacher",
  friends: ["michael", "steven", "peter"],
};
console.log(jonas.firstName, jonas.lastName);

const interestedIn = prompt(
  "what do you want to know about Jonas? Choose between firstName, lastName, age, job and friends"
);

if (jonas[interestedIn]) {
  console.log(jonas[interestedIn]);
} else {
  console.log(
    "wrong request! Choose between firstName, lastName, age, job and friends"
  );
}

//simple task

console.log(
  `${jonas.firstName} has ${jonas.friends.length} friends, and his best friend is called ${jonas.friends[0]}`
);

*/

// const jonas = {
//   firstName: "Jonas",
//   lastName: "Schmedtmann",
//   age: 2023 - 1991,
//   job: "teacher",
//   friends: ["Michael", "Peter", "Steven"],
// };

// console.log(jonas);

// console.log(jonas.firstName); //collect the values from the objects
// console.log(jonas["lastName"]); //collect the values from the objects

// const nameKey = "Name";
// console.log(jonas["first" + nameKey]); // any expression hear
// console.log(jonas["last" + nameKey]); // any expression hear

// const interestedIn = prompt(
//   "What do you want to know about Jonas? Choose between firstName, lastName, age, job, and friends"
// );

// console.log(jonas[interestedIn]);

// =============== js some codding problem solving =========
const lyrics =
  "tumi bondhu kala pakhi ami jeno ki. bosonto kale tomai bolte pari ni. sada sada kala kala";

const parts = lyrics.split(" "); // space bad diye akta array return korbe

const sentences = lyrics.split(".");

const chars = lyrics.split(""); // protita careckter ke alada alada korbe

const partial = lyrics.slice(5, 8); // koto theke suru kore koto theke katbe.

const partial2 = lyrics.substring(5, 8);

console.log(partial2);
