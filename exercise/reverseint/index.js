// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
  const reversed = n.toString().split('').reverse().join('');

  return parseInt(reversed) * Math.sign(n);
}

reverseInt(0);

module.exports = reverseInt;

// function reverseInt(n) {
//   let str = (n * Math.sign(n)).toString();
//   let newStr = '';
//
//   for (let char of str) {
//     if (char === '0' && str.length != 1) {
//       continue;
//     }
//     newStr = char + newStr;
//   }
//
//   let result = parseInt(newStr) * Math.sign(n);
//
//   return result;
// }