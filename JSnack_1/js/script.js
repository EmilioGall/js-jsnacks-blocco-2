// TEXT JSnack1
// Fai inserire un numero, che chiameremo N, all’utente.
// Genera N array, ognuno formato da 10 numeri casuali tra 1 e 100.
// Ogni volta che ne crei uno, stampalo a schermo.

const inputNum = parseInt(prompt(`Hello, User! Insert a numer.`));

console.log(inputNum, "Input", typeof inputNum);

for (let i = 0; i < inputNum; i++) {

    let newArray = [];

    console.log(newArray, "Input Number");

};

for (let i = 0; i < 10; i++) {

    newArray.push(Math.floor(Math.random() * 100));

};