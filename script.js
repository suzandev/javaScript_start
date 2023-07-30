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

var money = 65;
var danishPrice = 45;
var butterBread = 35;
var toastBiscuit = 20;

if (danishPrice < money) {
  console.log("Dan Dan danish khamu");
} else if (butterBread < money) {
  console.log("Butter bon khamu");
} else if (toastBiscuit < money) {
  console.log("Toast Biscuit khamu");
} else {
  console.log("Tea Party hobe only");
}

// ======== nested conditions

var math = true;
var geometry = true;
var straightLint = false;

if (math == true) {
  if (geometry == true) {
    if (straightLint == true) {
    } else {
      console.log("baka pothe cholte parba na");
    }
  } else {
    console.log("pithagorous hoite parba na");
  }
}
