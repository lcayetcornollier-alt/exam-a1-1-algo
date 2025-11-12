// ex09.js

function execute(username, steps, operation) {
  return operation(username, steps);
}

function forward(username, steps) {
  return username + " avance de " + steps;
}

function backward(username, steps) {
  return username + " recule de " + steps;
}

console.log(execute("BenBest", 1, forward)); // "BenBest avance de 1."
console.log(execute("KingStar", 10, backward)); // "KingStar recule de 10."
