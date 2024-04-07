// TEXT JSnack1
// Dare la possibilità di inserire due parole.
// Verificare tramite una funzione che le due parole abbiano la stessa lunghezza.
// Se hanno la stessa lunghezza, stamparle entrambe altrimenti stampare la più lunga delle due.

// DATA COLLECTION

// Define constant of number of strings to insert.

const numWord = 2;

// Define constant for message element.

const messageElement = document.getElementById("message");

console.log("messageElement", messageElement, typeof messageElement);

// Define constant for empty array of inserted strings.

const inputArray = [];

// Insert a string in the (inputArray) for (numWord) times.

for (let i = 0; i < numWord; i++) {

    const inputWord = prompt(`Hello, User! Insert ${numWord - i} word.`);

    console.log("inputWord", inputWord, typeof inputWord);

    inputArray.push(inputWord);

    console.log("inputArray", inputArray, typeof inputArray);

};

// LOGICAL EXECUTION

const inputSameLength = sameLength(inputArray);

console.log("inputSameLength", inputSameLength, typeof inputSameLength);

if (inputSameLength === true) {

    messageElement.innerHTML = `<p> The input words have same length. <p>`

    printArrayIn(inputArray, "output");

} else if (inputSameLength === false) {

    messageElement.innerHTML = `<p> The longest input word is: <p>`
    
    const longestString = outputLongest(inputArray);

    console.log("longestString", longestString, typeof longestString);

    const outputElem = document.getElementById("output");

    outputElem.innerHTML = `<div> ${longestString} `

};