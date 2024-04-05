// TEXT JSnack1
// Dare la possibilità di inserire due parole.
// Verificare tramite una funzione che le due parole abbiano la stessa lunghezza.
// Se hanno la stessa lunghezza, stamparle entrambe altrimenti stampare la più lunga delle due.

const numWord = 2;

for (let i = 0; i < numWord; i++) {

    const inputWord = prompt(`Hello, User! Insert ${numWord - i} word.`);

    console.log(inputWord, "Input", typeof inputWord);

};

if (lengthEval(wordOne, wordTwo) === "first") {

    console.log(wordOne);

} else if (lengthEval(wordOne, wordTwo) === "second") {
    
    console.log(wordTwo);

} else if (lengthEval(wordOne, wordTwo) === "same") {

    console.log(wordOne, wordTwo);
    
};