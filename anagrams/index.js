// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
  return cleanString(stringA) === cleanString(stringB);
}

function cleanString(str) {
  return str.replace(/[^\w]/g, "").toLowerCase().split('').sort().join('');
}

module.exports = anagrams;

// function anagrams(stringA, stringB) {
//   const newStrA = stringA.replace(/[^\w]/g, "").toLowerCase();
//   const newStrB = stringB.replace(/[^\w]/g, "").toLowerCase();
//
//   if (newStrA.length != newStrB.length) {
//     return false;
//   }
//
//   const mapA = {};
//   const mapB = {};
//
//   for (let char of newStrA) {
//     mapA[char] = mapA[char] + 1 || 1;
//   }
//
//   for (let char of newStrB) {
//     mapB[char] = mapB[char] + 1 || 1;
//   }
//
//   if (mapA.length != mapB.length) {
//     return false;
//   }
//
//   for (let element in mapA) {
//     if (!mapB[element]) {
//       return false;
//     }
//
//     if (mapA[element] != mapB[element]) {
//       return false;
//     }
//   }
//
//   return true;
// }

// function anagrams(stringA, stringB) {
//   const charMapA = buildCharMap(stringA);
//   const charMapB = buildCharMap(stringB);
//
//   if (charMapA.keys().length !== charMapB.keys().length) {
//     return false;
//   }
//
//   for (let char in charMapA) {
//     if (charMapA[char] !== charMapB[char]) {
//       return false;
//     }
//   }
//
//   return true;
// }
//
// function buildCharMap(str) {
//   const charMap = {};
//
//   for (let char of str.replace("/^\w/g", "").toLowerCase()) {
//     charMap[char] = charMap[char] + 1 || 1;
//   }
//
//   return charMap;
// }
