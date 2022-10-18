function returnRandNum() {
  return Math.round(Math.random() * 100);}

const x = `Seu número é`

const sum2RandNum = (n) => x+` ${returnRandNum() + n}!`;

const subtractRandNum = (n) => x+` ${returnRandNum() - n}!`;

const multiply2RandNum = (n) => x+` ${returnRandNum() * n}!`;

const divideRandNum = (n) => x+` ${returnRandNum() / n}!`;