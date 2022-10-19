const returnRandomNumber = () => Math.random();

const calcRand = () => Math.round(returnRandomNumber() * 100);

const sumToRandomNumber = (num) => `Seu número é ${calcRand() + num}!`;

const subtractRandomNumber = (num) => `Seu número é ${calcRand() - num}!`;

const multiplyToRandomNumber = (num) => `Seu número é ${calcRand() * num}!`;

const divideRandomNumber = (num) => `Seu número é ${calcRand() / num}!`;