// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

// n = 2
//  #
// ###

// // test
// n   strLen  str
// 2   3       ''
//
// level   col   str
// 1       1     ' '
// 1       2     ' #'
// 1       3     ' # '
// => ' # '
// 2       1     '#'
// 2       2     '###'

// // pseudo code
// strLen = n + (n-1)
// level -> 1 to n
//   str = ''
//   col -> 1 to strLen
//     diff = Math.absolute(n - col)
//     if diff < level
//       str += '#'
//     else
//       str += ' '
//
//   print str


function pyramid(n, row = 0, level = '') {
  if (row === n) {
    return;
  }

  const levelLen = 2 * n - 1;

  if (level.length === levelLen) {
    console.log(level);
    return pyramid(n, row + 1);
  }

  const midIdx = Math.floor(levelLen / 2);
  let add = '';

  if (level.length >= midIdx - row && level.length <= midIdx + row) {
    add = '#';
  } else {
    add = ' ';
  }

  return pyramid(n, row, level + add);
}

module.exports = pyramid;

// // iterative
// function pyramid(n) {
//   const strLen = n + (n - 1);
//
//   for (let level = 1; level <= n; level++) {
//     let str = '';
//
//     for (let col = 1; col <= strLen; col++) {
//       let diff = Math.abs(n - col);
//       if (diff < level) {
//         str += '#';
//       } else {
//         str += ' ';
//       }
//     }
//
//     console.log(str);
//   }
// }

// // recursive
// function pyramid(n, level = 1, col = 1, str = '') {
//   if (level > n) {
//     return;
//   }
//
//   const strLen = n + (n - 1);
//
//   if (str.length === strLen) {
//     console.log(str);
//     return pyramid(n, level + 1);
//   }
//
//   let diff = Math.abs(n - col);
//   if (diff < level) {
//     str += '#';
//   } else {
//     str += ' ';
//   }
//
//   return pyramid(n, level, col + 1, str);
// }

// function pyramid(n) {
//   const strLen = 2 * n - 1;
//   const midIdx = Math.floor(strLen / 2);
//
//   for (let row = 0; row < n; row++) {
//     let str = '';
//
//     for (let col = 0; col < strLen; col++) {
//       if (col >= midIdx - row && col <= midIdx + row) {
//         str += '#';
//       } else {
//         str += ' ';
//       }
//     }
//
//     console.log(str);
//   }
// }