function returnRandNum() {
  return Math.round(Math.random() * 100);}

const x = `Seu número é`

function sum2RandNum(num) {
  return x+` ${returnRandNum() + num}!`;
}

function subtractRandNum(num) {
  return x+` ${returnRandNum() - num}!`;
}

function multiply2RandNum(num) {
  return x+` ${returnRandNum() * num}!`;
}

function divideRandNum(num) {
  return x+` ${returnRandNum() / num}!`;
}