// ex03.js

function max3(a, b, c) {
  if (a > b && a > c) {
    return a;
  }
  if (b > a && b > c) {
    return b;
  }
  if (c > a && c > b) {
    return c;
  }
}

console.log(max3(1, 3, 4)); // 4
console.log(max3(-1, -2, -3)); // -1
