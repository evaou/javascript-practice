// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  let charMap = {};

  for (let char of str) {
    if (charMap[char]) {
      charMap[char]++;
    } else {
      charMap[char] = 1;
    }
  }

  let max = 0;
  let maxChar = '';

  for (let char in charMap) {
    if (charMap[char] > max) {
      max = charMap[char];
      maxChar = char;
    }
  }

  return maxChar;
}

module.exports = maxChar;

// function maxChar(str) {
//   let arr = str.split('');
//   let chars = {};
//   for (let char of arr) {
//     chars[char] = chars[char] + 1 || 1;
//   }
//
//   let maxChar = arr[0];
//   for (let char in chars) {
//     if (chars[char] > chars[maxChar]) {
//       maxChar = char;
//     }
//   }
//
//   return maxChar
// }