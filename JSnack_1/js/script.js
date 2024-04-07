// TEXT JSnack1
// Fai inserire un numero, che chiameremo N, all’utente.
// Genera N array, ognuno formato da 10 numeri casuali tra 1 e 100.
// Ogni volta che ne crei uno, stampalo a schermo.

const inputNum = parseInt(prompt(`Hello, User! Insert the number of arrays you want to print.`));

console.log("Input number", inputNum, typeof inputNum);

for (let i = 0; i < inputNum; i++) {

    const fullArray = numInArray(10)

    console.log(fullArray);

    printArrayIn(fullArray, "output")

};