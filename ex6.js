// ex06.js

function rankUpElo(level, isWin) {
  let a = level / 100;
  if (isWin == true) {
    return level + a * 20;
  }
  if (isWin == false) {
    return level - a * 25;
  }
}

console.log(rankUpElo(10, false)); // 7.5
console.log(rankUpElo(5, true)); // 6
