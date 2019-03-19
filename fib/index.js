// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

function memorize(fn) {
  const cache = {};

  return function(...args) {
    if (cache[args]) {
      return cache[args];
    }

    const result = fn.apply(this, args);
    cache[args] = result;
    return result;
  };
}

function slowFib(n) {
  if (n < 2) {
    return n;
  }

  return fib(n-1) + fib(n-2);
}

const fib = memorize(slowFib);

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
/*
function slowFib(n) {
  const result = [0, 1];

  for (let i = 2; i <= n; i++) {
    let a = result[i-1];
    let b = result[i-2];

    result.push(a+b);
  }

  return result[n];
}
*/

// recursive
/*
function fib(n) {
  if (n <= 1) {
    return n;
  }

  return fib(n-1) + fib(n-2);
}
*/
