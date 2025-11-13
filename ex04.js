// ex04.js

function dateToSeconds(days, hours, minutes, seconds) {
  let d = days * 86400;
  let h = hours * 3600;
  let m = minutes * 60;
  return d + h + m + seconds;
}

console.log(dateToSeconds(0, 1, 3, 2)); // 3782
console.log(dateToSeconds(1, 68, 2, 87)); // 331407
