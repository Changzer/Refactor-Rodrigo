const returnRandNum = () => Math.round(Math.random() * 100);

const randCalc = () => `Seu número é` + `${returnRandNum()} `;

const sum2RandNum = (n) => `${randCalc() + n}!`;

const subtractRandNum = (n) => `${randCalc() - n}!`;

const multiply2RandNum = (n) => `${randCalc() * n}!`;

const divideRandNum = (n) => `${randCalc() / n}!`;