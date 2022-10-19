const returnRandomNumber = () => Math.round(Math.random() * 100);

const sumToRandomNumber = (num) => `Seu número é ${returnRandomNumber()+ num}!`;

const subtractRandomNumber = (num) => `Seu número é ${returnRandomNumber() - num}!`;

const multiplyToRandomNumber = (num) => `Seu número é ${returnRandomNumber() * num}!`;

const divideRandomNumber = (num) => `Seu número é ${returnRandomNumber() / num}!`;