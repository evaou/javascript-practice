// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

function palindrome(str) {
  return str.split('').every((char, i) => {
    return char === str[str.length - i - 1];
  });
}

module.exports = palindrome;

// function palindrome(str) {
//   let midIdx = 0;
//   if (str.length % 2 === 0) {
//     midIdx = str.length / 2;
//   } else {
//     midIdx = (str.length - 1) / 2;
//   }
//
//   let result = true;
//   for (let i = 0; i < midIdx; i++) {
//     if (str[i] != str[str.length - i - 1]) {
//       result = false;
//       break;
//     }
//   }
//
//   return result;
// }

// function palindrome(str) {
//   const reversed = str.split('').reverse().join('');
//
//   return str === reversed;
// }