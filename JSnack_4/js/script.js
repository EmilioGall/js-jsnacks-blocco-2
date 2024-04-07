// TEXT JSnack1
// Scrivere una funzione trovaIndice() che, dati un array e un elemento in input, restituisca la posizione in cui si trova l'elemento all'interno dell'array; se l'elemento non è presente nell'array, allora la funzione deve restituire -1.

// DATA COLLECTION

// Define constant of given array (inputArray).

const inputArray = ["Sea", "Moon", "Sky", "Stars"];

console.log("inputArray", inputArray, typeof inputArray);

// Define constant of input element (inputElem).

const inputElem = "Sky";

console.log("inputElem", inputElem, typeof inputElem);

const elemIndex = findIndex(inputArray, inputElem);

console.log("The index of the element in the array is:", elemIndex, typeof elemIndex);
