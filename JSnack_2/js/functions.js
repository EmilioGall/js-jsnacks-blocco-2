/**
 * Description: function return true if strings in stringsArray have same length.
 * @param {object} stringsArray array of strings.
 * @returns {boolean} true if strings have same length, else false.
 */
function sameLength(stringsArray) {

    let result = false;

    const stringsLengthArray = [];

    for (let i=0; i < stringsArray.length; i++) {

        const curString = stringsArray[i].length;

        console.log("curString", curString, typeof curString);

        stringsLengthArray.push(curString);

        console.log("stringsLengthArray", stringsLengthArray, typeof stringsLengthArray);

        if (stringsLengthArray[i] === stringsLengthArray[i - 1]) {

            result = true;

        };

    };

    console.log("result", result, typeof result);

    return result;

};


/**
 * Description: function return the longest string in arrayOfStrings.
 * @param {object} arrayOfStrings array of strings.
 * @returns {string} longest string in the array.
 */
function outputLongest(arrayOfStrings) {

    let longestString = "";

    for (let i=0; i < arrayOfStrings.length; i++) {

        const curString = arrayOfStrings[i];

        console.log("curString", curString, typeof curString);

        if (curString.length > longestString.length) {

            longestString = curString;

        };

        console.log("curString", curString, typeof curString);

    };

    return longestString;

};


/**
 * Description: function print an array (arrayToPrint) in a unordered list element (resultId).
 * @param {object} arrayToPrint array to print.
 * @param {string} resultId id of the element where we print.
 */
function printArrayIn(arrayToPrint, resultId) {

    console.log("resultId", resultId, typeof resultId);

    const resultElem = document.getElementById(`${resultId}`);

    console.log("resultElem", resultElem, typeof resultElem);

    for (let i=0; i < arrayToPrint.length; i++) {

        resultElem.innerHTML += `<div> ${arrayToPrint[i]} `

    };

};