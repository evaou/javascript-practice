// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

function fib(n) {

}

module.exports = fib;

// iterative
/*
function fib(n) {
  let result = 0;
  let num1 = 0;
  let num2 = 1;

  if (n <= 1) {
    return n;
  }

  for (let i = 2; i <= n; i++) {
    result = num1 + num2;
    num1 = num2;
    num2 = result;
  }

  return result;
}
*/
