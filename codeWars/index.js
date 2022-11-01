//  1.  // Deoksiribonukleinska kiselina, DNK je primarni molekul za skladištenje informacija u biološkim sistemima. Sastoji se od četiri baze nukleinske kiseline Guanin ('G'), Citozin ('C'), Adenin ('A') i Timin ('T').
// ======
// Ribonukleinska kiselina, RNK, je primarni molekul glasnika u ćelijama. RNK se malo razlikuje od DNK svojom hemijskom strukturom i ne sadrži timin. U RNK timin je zamenjen drugom nukleinskom kiselinom Uracil ('U').

// Kreirajte funkciju koja prevodi dati niz DNK u RNK.

// Na primer:

// "GCAT" => "GCAU"

// function DNAtoRNA(dna) {
//  return dna.replace(/T/g, "U");
// }
// ========================================================================================

//  2.  // Simple, remove the spaces from the string, then return the resultant string.
// ======
// function noSpace(x){
//     return x.replace(/\s/g, '');
//   }

//                -   / is the Regular Expression delimiter. It marks the beginning and end of a pattern

//                -  \s matches all space characters: '\t', '\n', '\r', '\f', ' ', and a number of others

//                -  g means that the regex should match the string globally, so that str.replace will replace all occurrences of the pattern.
// ========================================================================================

//    3.   // Nathan loves cycling.
// =========
// Because Nathan knows it is important to stay hydrated, he drinks 0.5 litres of water per hour of cycling.

// You get given the time in hours and you need to return the number of litres Nathan will drink, rounded to the smallest value.

// For example:

// time = 3 ----> litres = 1

// time = 6.7---> litres = 3

// time = 11.8--> litres = 5

// function litres(time) {

//     return Math.floor(time * 0.5);
//   }
// ========================================================================================

//  4.  // Very simple, given an integer or a floating-point number, find its opposite.
// ======
// Examples:

// 1: -1
// 14: -14
// -34: 34

// function opposite(number) {
//     return (-number)
//   }

// ========================================================================================
//  5.  //Task
// ======
// Sum all the numbers of a given array ( cq. list ), except the highest and the lowest element ( by value, not by index! ).

// The highest or lowest element respectively is a single element at each edge, even if there are more than one with the same value.

// Mind the input validation.

// Example
// { 6, 2, 1, 8, 10 } => 16
// { 1, 1, 11, 2, 3 } => 6
// ============================================================================

// function sumArray(array) {
//   if (array == null) {
//     return 0;
//   } else if (array.length < 2) {
//     return 0;
//   } else {
//     array = array.sort(function(a,b) {return a - b;});
//     var total = 0;
//     for (var i = 1; i < array.length - 1; i++) {
//       total += array[i];
//     }
//     return total;
//   }
// }
// ============================================================================

//  6.  // Write a function which calculates the average of the numbers in a given list.
// ======
// Note: Empty arrays should return 0.

//                   function findAverage(array) {

//                     return array.length === 0 ? 0 :  array.reduce((acc,cv) => acc + cv , 0) / array.length

//                   }

// // //====================================================================================================

//   7.  //Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.
// =======

// The output should be two capital letters with a dot separating them.

// It should look like this:

// Sam Harris => S.H

// patrick feeney => P.F

//                            function abbrevName(name){

//                                   var nameArray = name.split(" ");
//                                          return (nameArray[0][0] + "."  + nameArray[1][0]).toUpperCase();
//   }

// =============================================================================================================

//  8.  // There was a test in your class and you passed it. Congratulations!
// =======
// But you're an ambitious person. You want to know if you're better than the average student in your class.

// You receive an array with your peers' test scores. Now calculate the average and compare your score!

// Return True if you're better, else False!

// Note:
// Your points are not included in the array of your class's points. For calculating the average point you may add your point to the given array!

// function betterThanAverage(clsPoints, myPoints) {
//     let averageOfClass = [];

//     averageOfClass.push(clsPoints.reduce((accumulator,currentVal) => accumulator + currentVal , 0) / clsPoints.length                            )

//     if (averageOfClass > myPoints){
//       return false

//     }
//     else if(myPoints > averageOfClass){
//       return true

//     }
//   }

// ================================================================================================================

//  9.  //Given a non-empty array of integers, return the result of multiplying the values together in order. Example:
// ======
// [1, 2, 3, 4] => 1 * 2 * 3 * 4 = 24

// function grow(x) {
//   return x.reduce((acc, crVal) => acc * crVal);
// }

// let array = [1, 2, 3, 4];

// console.log(grow(array));

// =================================================================================================================

// Given a non-negative integer, 3 for example, return a string with a murmur:
// "1 sheep...2 sheep...3 sheep...". Input will always be valid, i.e. no negative integers.

// var countSheep = function (num) {
//   let str = "";
//   for (let i = 1; i <= num; i++) {
//     str += `${i} sheep...`;
//   }
//   return str;
// };

// =======================================================================================

//  11.  // Create a function which answers the question "Are you playing banjo?".
// If your name starts with the letter "R" or lower case "r", you are playing banjo!

// The function takes a name as its only argument, and returns one of the following strings:

// name + " plays banjo"
// name + " does not play banjo"

// function areYouPlayingBanjo(name) {
//     if (name[0] == "r" || name[0] == "R") {
//       return `${name} plays banjo`;
//     } else if (name[0] !== "r" || name[0] !== "R") {
//       return `${name} does not play banjo`;
//     }
//   }

// ======================================================================================
// Grade book
// Complete the function so that it finds the average of the three scores passed to it and returns the letter value associated with that grade.

// Numerical Score	Letter Grade
// 90 <= score <= 100	'A'
// 80 <= score < 90	'B'
// 70 <= score < 80	'C'
// 60 <= score < 70	'D'
// 0 <= score < 60	'F'
// Tested values are all between 0 and 100. Theres is no need to check for negative values or values greater than 100.

// function getGrade(s1, s2, s3) {
//   let totalScore = [];

//   let scores = [s1, s2, s3];
//   totalScore.push(scores.reduce((acc, cv) => acc + cv, 0) / scores.length);

//   if (totalScore >= 90) {
//     return "A";
//   } else if (totalScore >= 80) {
//     return "B";
//   } else if (totalScore >= 70) {
//     return "C";
//   } else if (totalScore >= 60) {
//     return "D";
//   } else if (totalScore < 60 && totalScore >= 0) {
//     return "F";
//   }
// }
// //===========================================================================================

// Complete the square sum function so that it squares each number passed into it and then sums the results together.

// For example, for [1,    2, 2] it should return 9 because 1^2 + 2^2 + 2^2 = 9.

// ?????????????????????????????????????????????????????????

// ============================================================================================

// You were camping with your friends far away from home, but when it's time to go back, you realize that your fuel is running out and the nearest pump is 50 miles away! You know that on average, your car runs on about 25 miles per gallon. There are 2 gallons left.

// Considering these factors, write a function that tells you if it is possible to get to the pump or not.

// Function should return true if it is possible and false if not.

// const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
//   let ourDistance = mpg * fuelLeft;
//   if (ourDistance >= distanceToPump) {
//     return true;
//   } else {
//     return false;
//   }
// };

// ====================================================================================

// array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// for (let i = 0; i < array.length; i++) {
//   array[i] *= -1;
// }
// console.log(array);

// ====================================================================================
// Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.

// function reverseWords(str) {
//   var newStringArr = str.split(" ");
//   for (var i = 0; i < newStringArr.length; i++) {
//     newStringArr[i] = newStringArr[i].split("");
//     newStringArr[i].reverse();
//     newStringArr[i] = newStringArr[i].join("");
//   }
//   newStringArr = newStringArr.join(" ");
//   return newStringArr;
// }
// ====================================================================================
// A hero is on his way to the castle to complete his mission. However, he's been told that the castle is
// surrounded with a couple of powerful dragons! each dragon takes 2 bullets to be defeated, our hero has no idea how many
// bullets he should carry.. Assuming he's gonna grab a specific given number of bullets and move forward to fight another specific given number of
// dragons, will he survive?

// Return True if yes, False otherwise :)

// function hero(bullets, dragons) {
//   return bullets >= dragons * 2;
// }

// ========================================================================================7

// Your classmates asked you to copy some paperwork for them. You know that there are 'n' classmates and the paperwork has 'm' pages.

// Your task is to calculate how many blank pages do you need. If n < 0 or m < 0 return 0.

// Example:
// n= 5, m=5: 25
// n=-5, m=5:  0

// function paperwork(n,m){

//   if (n<0 || m<0) {
//     return 0;
//   }
//   else{
//     return n*m;
//   }
// }
// ===================================================================================
// An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that
// determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

// Example: (Input --> Output)

// "Dermatoglyphics" --> true "aba" --> false "moOse" --> false (ignore letter case)

// function isIsogram(str) {
//   var i, j;
//   str = str.toLowerCase();
//   for (i = 0; i < str.length; ++i) {
//     for (j = i + 1; j < str.length; ++j) {
//       if (str[i] === str[j]) {
//         return false;
//       }
//     }
//   }
//   return true;
// }

// ==========================================================================================
// The Western Suburbs Croquet Club has two categories of membership, Senior and Open. They would like your help with an application form that will tell prospective members which category they will be placed.

// To be a senior, a member must be at least 55 years old and have a handicap greater than 7. In this croquet club, handicaps range from -2 to +26; the better the player the lower the handicap.

// Input
// Input will consist of a list of pairs. Each pair contains information for a single potential member. Information consists of an integer for the person's age and an integer for the person's handicap.

// Output
// Output will consist of a list of string values (in Haskell and C: Open or Senior) stating whether the respective member is to be placed in the senior or open category.

// Example
// input =  [[18, 20], [45, 2], [61, 12], [37, 6], [21, 21], [78, 9]]
// output = ["Open", "Open", "Senior", "Open", "Open", "Senior"]

// function openOrSenior(data) {
//   // Senior = 55+ and 7+
//   var result = [];

//   for (var i = 0; i < data.length; i++) {
//     result[i] = data[i][0] >= 55 && data[i][1] > 7 ? "Senior" : "Open";
//   }

//   return result;
// }

// OR;

// function openOrSenior(data){
//     var result = [];
//     data.forEach(function(member) {
//       if(member[0] >= 55 && member[1] > 7) {
//         result.push('Senior');
//       } else {
//         result.push('Open');
//       }
//     })
//     return result;
//   }

// ============================================================================================
// const str = "is2 Thi1s T4est 3a";
// let splitStr = str.split(" ");

// const a = splitStr.sort((a, b) => {
//   const aNum = a.split("").find((el) => !isNaN(el));
//   const bNum = b.split("").find((el) => !isNaN(el));

//   return aNum - bNum;
// });

// console.log(a);
// //============================================================================================
// All of the animals are having a feast! Each animal is bringing one dish. There is just one rule: the dish must start and end with the same
// letters as the animal's name. For example, the great blue heron is bringing garlic naan and the chickadee is bringing chocolate cake.

// Write a function feast that takes the animal's name and dish as arguments and returns true or false to indicate whether the beast is allowed
// to bring the dish to the feast.

// Assume that beast and dish are always lowercase strings, and that each has at least two letters. beast and
// dish may contain hyphens and spaces, but these will not appear at the beginning or end of the string. They will not contain numerals.

// function feast(beast, dish) {
//   return (
//     beast[0] === dish[0] && beast[beast.length - 1] === dish[dish.length - 1]
//   );
// }

// ===============================================================================================
// Given the triangle of consecutive odd numbers:

//              1
//           3     5
//        7     9    11
//    13    15    17    19
// 21    23    25    27    29
// ...
// Calculate the sum of the numbers in the nth row of this triangle (starting at index 1) e.g.: (Input --> Output)

// 1 -->  1
// 2 --> 3 + 5 = 8

// function rowSumOddNumbers(n) {
//   let startNumber = n * (n - 1) + 1;
//   let rowArr = [startNumber];
//   for (i = 0; i < n - 1; i++) {
//     rowArr.push(rowArr[i] + 2);
//   }
//   return rowArr.reduce((prev, cv) => prev + cv, 0);
// }

// ========================================================================================
// This time no story, no theory. The examples below show you how to write function accum:

// Examples:
// accum("abcd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt") -> "C-Ww-Aaa-Tttt"
// The parameter of accum is a string which includes only letters from a..z and A..Z.

// function accum(s) {
//   const result = [];
//   const lowerStr = s.toLowerCase();

//   for (let i = 0; i < lowerStr.length; i++) {
//     let str = lowerStr[i].toUpperCase();
//     for (let j = 0; j < i; j++) {
//       str += lowerStr[i];
//     }
//     result.push(str);
//   }

//   return result.join("-");
// }

// ======================================================================================
//
// Introduction
// The first century spans from the year 1 up to and including the year 100, the second century - from the year 101 up to and including the year 200, etc.

// Task
// Given a year, return the century it is in.

// Examples
// 1705 --> 18
// 1900 --> 19
// 1601 --> 17
// 2000 --> 20

// function century(year) {
//   let result = 0;
//   for (let i = 0; i < year; i++) {
//     if (i % 100 === 0) {
//       result++;
//     }
//   }
//   return result;
// }
// console.log(century(50));

// =======================
// dns

// http

// https

// udp

// sta je internet

// tcp

// osi model

// ==========================================================

// Make a program that filters a list of strings and returns a list with only your friends name in it.

// If a name has exactly 4 letters in it, you can be sure that it has to be a friend of yours! Otherwise, you can be sure he's not...

// Ex: Input = ["Ryan", "Kieran", "Jason", "Yous"], Output = ["Ryan", "Yous"]

// i.e.

// friend ["Ryan", "Kieran", "Mark"] `shouldBe` ["Ryan", "Mark"]
// Note: keep the original order of the names in the output.

// function friend(friends){
//     return friends.filter(el => el.length === 4);
//   }

// ===========================================================

// Given a string of digits, you should replace any digit below 5
// with '0' and any digit 5 and above with '1'. Return the resulting string.

// Note: input will never be an empty string

// function fakeBin(x) {
//   let result = [];
//   let y = x.split("");
//   for (i = 0; i < y.length; i++) {
//     if (y[i] < 5) {
//       result.push(0);
//     } else if (y[i] >= 5) {
//       result.push(1);
//     }
//   }
//   return result.join("");
// }
//=====================================================================

//--------------------------------------------------------------

//             Proveriti kako funkconise ovaj zadatak i nauciti :
//                          dns

//                          http

//                          https

//                          udp

//                          sta je internet

//                          tcp

//                          osi model
//--------------------------------------------------------------

//function DNAStrand(dna) {
//   let result = "";
//   for (let i = 0; i < dna.length; i++) {
//     if (dna[i] == "A") {
//       result += "T";
//     } else {
//       result += dna[i];
//     }
//   }

//   return result;
// }
// console.log(DNAStrand(["AAAAAAAAA"]));

//=====================================================================
// //
// Complete the solution so that it reverses the string passed into it.

// 'world'  =>  'dlrow'
// 'word'   =>  'drow'

// function solution(str){
//     return str.split('').reverse().join('')
//  }

//=====================================================================
