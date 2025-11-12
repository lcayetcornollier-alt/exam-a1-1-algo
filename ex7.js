// ex07.js

function gradeMe(grade) {
  if (grade >= 0.75) {
    return "A2";
  }
  if (grade >= 0.66 && grade <= 0.74) {
    return "A1";
  }
  if (grade >= 0.33 && grade <= 0.65) {
    return "EC";
  }
  return "NA";
}

console.log(gradeMe(0.2)); // "NA"
console.log(gradeMe(0.75)); // "A2"
console.log(gradeMe(0.66)); // "A1"
console.log(gradeMe(0.33)); // "EC"
