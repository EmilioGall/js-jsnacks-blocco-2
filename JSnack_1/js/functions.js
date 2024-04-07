/**
 * Description: function returns a random integer between min and max.
 * @param {number} min
 * @param {number} max
 * @returns {number} 
 */
function getRandomInteger(min, max) {

    return Math.floor(Math.random() * (max - min + 1)) + min;

};


/**
 * Description: function create an array of nNUm random numbers between 1 and 100.
 * @param {number} nNum number of numbers to push in the new array.
 * @returns {object} newArray
 */
function numInArray(nNum) {

    let newArray = [];

    for (let i=0; i < nNum; i++) {

        let randomNum = getRandomInteger(1, 100)

        newArray.push(` ${randomNum}`)

    };

    return newArray;

};


/**
 * Description: function print an array (arrayToPrint) in an element (resultId).
 * @param {object} arrayToPrint array to print.
 * @param {string} resultId id of the element where we print.
 */
function printArrayIn(arrayToPrint, resultId) {

    console.log("resultId", resultId, typeof resultId);

    const resultElem = document.getElementById(`${resultId}`);

    console.log("resultElem", resultElem, typeof resultElem);

    resultElem.innerHTML += `<li>${arrayToPrint} `

};