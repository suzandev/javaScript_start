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

/*
const lyrics =
  "tumi bondhu kala pakhi ami jeno ki. bosonto kale tomai bolte pari ni. sada sada kala kala";

const parts = lyrics.split(" "); // space bad diye akta array return korbe

const sentences = lyrics.split(".");

const chars = lyrics.split(""); // protita careckter ke alada alada korbe

const partial = lyrics.slice(5, 8); // koto theke suru kore koto theke katbe.

const partial2 = lyrics.substring(5, 8);

console.log(partial2);

*/

// =======  some math =======

/*
const num1 = 25;
const num2 = 45;

const gap = Math.abs(num1 - num2); // only positive or negative  return debe na only value return debe

if (gap < 5) {
  console.log("you guys can be friends");
} else {
  console.log("you guys stay apart");
}

console.log(gap);
*/

/*

const numbers = 2.4598;

const fullNumber = Math.round(numbers); // .5 thakle opore values debe
// console.log(fullNumber);
const result = Math.ceil(2.00001);

const result2 = Math.floor(456.259); // . dosomik er porer numbers nebe na
// console.log(result2);

//const random = Math.random() * 100; // only 100 er modho random number debe

const random2 = Math.floor(Math.random() * 100); // . dosomik er porer number nebe na but random number debe

console.log(random2);

 // 1-20 er modho random number debe with loop
for (let i = 0; i < 20; i++) {
  const random = Math.round(Math.random() * 6);
  console.log(random);
}

*/

// =========== some swap ==========

/*
let first = 5;
let second = 7;

console.log(first, second);

const temp = first;

first = second;
second = temp;

console.log(first, second);
*/

// ========= max number =========

/*
// ======== find begets number of for loop =========

function maxNumber(numbers) {
  let largest = numbers[0];

  for (let i = 0; i < numbers.length; i++) {
    const index = i;
    const element = numbers[index];

    if (element > largest) {
      largest = element;
    }
  }
  return largest;
}

const heights = [167, 190, 120, 165, 137, 265];

const tallest = maxNumber(heights);
console.log(tallest);

*/

// ======== find lowest number of for loop =========

/*
function maxNumber(numbers) {
  let largest = numbers[0];

  for (let i = 0; i < numbers.length; i++) {
    const index = i;
    const element = numbers[index];

    if (element < largest) {
      largest = element;
    }
  }
  return largest;
}

const heights = [167, 190, 120, 165, 137, 265];

const tallest = maxNumber(heights);
console.log(tallest);

*/
//  ========= fibonacci numbers start =========

/*
// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144. // fibonacci dhara 

const fibo = [0, 1];

for (let i = 2; i <= 15; i++) {
  fibo[i] = fibo[i - 1] + fibo[i - 2];
}
console.log(fibo);
*/

// =*=*=*=*=*=*=*=*= same name batil *=*=*=*=*=*=*=

/*
const studentsName = [
  "abul",
  "babul",
  "cabul",
  "dabul",
  "abul",
  "kabul",
  "sabul",
  "babul",
  "cabul",
  "dabul",
  "abul",
  "babul",
  "sabul",
];

function removeDuplicate(names) {
  const unique = [];
  for (let i = 0; i < names.length; i++) {
    const name = names[i];

    if (unique.includes(name) === false) {
      unique.push(name);
    }
  }
  return unique;
}

const uniqueNames = removeDuplicate(studentsName);
console.log(uniqueNames);
*/

// =*=*=*=*=*=*=*=*= show output from: 1-50 *=*=*=*=*=*=*=
/*
  // 1. if the number is divisible by 3 then instead of the number show "foo"
  // 2. if the number is divisible by 5 then instead of the number show "bar"
  // 3. if the number is divisible by both 3 and 5 then instead of the number show "foobar"
*/
/*
for (let i = 1; i <= 50; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("foobar");
  } else if (i % 3 === 0) {
    console.log("foo");
  } else if (i % 5 === 0) {
    console.log("bar");
  } else {
    console.log(i);
  }
}
*/

// =*=*=*=*=*=*=*=*= fixed: per item wood requirements *=*=*=*=*=*=*=

/*

// 1. chair --> 3 cft
// 2. table --> 10 cft
// 3. bed --> 50 cft

// vary: quantity

function woodCalculator(chairQuantity, tableQuantity, bedQuantity) {
  const perChairWood = 3;
  const perTableWood = 10;
  const perBedWood = 50;

  const chairWood = chairQuantity * perChairWood;
  const tableWood = tableQuantity * perTableWood;
  const bedWood = bedQuantity * perBedWood;

  const totalWood = chairWood + tableWood + bedWood;

  return totalWood;

  // console.log(chairQuantity, tableQuantity, bedQuantity);
}

const totalWood = woodCalculator(2, 2, 5);
console.log("total wood require:", totalWood);

*/

// =*=*=*=*=*=*=*=*= Shopping objects example *=*=*=*=*=*=*=

/*
const phone = [
  {
    name: "Samsung",
    camera: 12,
    storage: "32gb",
    price: 36000,
    color: "silver",
  },
  {
    name: "Walton",
    camera: 12,
    storage: "32gb",
    price: 22000,
    color: "silver",
  },
  {
    name: "Iphone",
    camera: 12,
    storage: "32gb",
    price: 82000,
    color: "silver",
  },
  {
    name: "Xaomi",
    camera: 12,
    storage: "32gb",
    price: 52000,
    color: "silver",
  },
  {
    name: "Nokia",
    camera: 12,
    storage: "32gb",
    price: 44000,
    color: "silver",
  },
  {
    name: "Oppo",
    camera: 12,
    storage: "32gb",
    price: 20000,
    color: "silver",
  },
  {
    name: "HTC",
    camera: 12,
    storage: "32gb",
    price: 62000,
    color: "silver",
  },
];

// sob cheye kom price er phone paoya jabe
function cheapestPhone(phones) {
  let cheapest = phones[0];
  for (let i = 0; i < phones.length; i++) {
    const phone = phones[i];
    if (phone.price < cheapest.price) {
      cheapest = phone;
    }
  }
  return cheapest;
}

const mySelection = cheapestPhone(phone);
console.log(mySelection);

*/

// =*=*=*=*=*=*=*=*= Shopping card *=*=*=*=*=*=*=

/*
const shoppingCart = [
  {
    name: "shoe",
    price: 1200,
  },
  {
    name: "shirt",
    price: 2200,
  },
  {
    name: "pant",
    price: 3700,
  },
  {
    name: "belt",
    price: 600,
  },
];

function totalCost(products) {
  let sum = 0;

  for (let i = 0; i < products.length; i++) {
    const product = products[i];
    sum = sum + product.price;
  }
  return sum;
}

const expense = totalCost(shoppingCart);
console.log("total expense today:", expense);

*/

// =*=*=*=*=*=*=*=*= Discount for shopping *=*=*=*=*=*=*=

/**
 * if ticket numbers is less than 100, per ticket price: 100
 * if ticket numbers is more than 100, but less than 200, First 100 tickets will be 100/ticket.
 * rest tickets will be 90 taka per piece
 * if you purchase more than 200 tickets,
 *  first 100 --> 100tk
 * 101-200 --> 90tk
 * 200+ --> 70tk
 */

/*
function ticketPrice(ticketQuantity) {
  const first100Rate = 100;
  const second100Rate = 90;
  const restTicketRate = 70;

  if (ticketQuantity <= 100) {
    const price = ticketQuantity * first100Rate;
    return price;
  } else if (ticketQuantity <= 200) {
    const first100price = 100 * first100Rate;
    const restTicketQuantity = ticketQuantity - 100;
    const restTicketPrice = restTicketQuantity * second100Rate;
    const totalPrice = first100price + restTicketPrice;
    return totalPrice;
  } else {
    const first100price = 100 * first100Rate;
    const second100price = 100 * second100Rate;
    const restTicketQuantity = ticketQuantity - 200;
    const restTicketPrice = restTicketQuantity * restTicketRate;
    const totalPrice = first100price + second100price + restTicketPrice;
    return totalPrice;
  }
}

const price = ticketPrice(230);
console.log("price:", price);

*/
