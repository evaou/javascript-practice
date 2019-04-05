// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

function vowels(str) {
  const matches = str.match(/[aeiou]/gi);
  return matches ? matches.length : 0;
}

module.exports = vowels;

// function vowels(str) {
//   const vowelsArray = ['a', 'e', 'i', 'o', 'u'];
//   let num = 0;
//
//   for (let char of str.toLowerCase()) {
//     if (vowelsArray.indexOf(char) >= 0) {
//       num++
//     }
//   }
//
//   return num;
// }

// // iterative
// function vowels(str) {
//   let count = 0;
//   const checker = "aeiou";
//
//   for (let char of str.toLowerCase()) {
//     if (checker.includes(char)) {
//       count++;
//     }
//   }
//
//   return count;
// }