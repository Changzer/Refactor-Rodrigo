function returnRandomNumber() {
  return Math.round(Math.random() * 100);}

const x = `Seu número é`

function sumToRandomNumber(num) {
  return x+` ${returnRandomNumber() + num}!`;
}

function subtractRandomNumber(num) {
  return x+` ${returnRandomNumber() - num}!`;
}

function multiplyToRandomNumber(num) {
  return x+` ${returnRandomNumber() * num}!`;
}

function divideRandomNumber(num) {
  return x+` ${returnRandomNumber() / num}!`;
}