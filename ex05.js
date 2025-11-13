// ex05.js

function isBetween(n, min, max) {
  if (n >= min && n <= max) {
    return true;
  }
  return false;
}

console.log(isBetween(1, 3, 4)); // false
console.log(isBetween(0, 0, 10)); // true
console.log(isBetween(-2, -4, -2)); // true
