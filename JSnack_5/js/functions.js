/**
 * Description: function returns all elements of (containerArray) printed in a string.
 * @param {object} containerArray array of elements.
 * @returns {string} all printed elements.
 */
function printArray(containerArray) {

    let result = "";

    for (let i=0; i < containerArray.length; i++) {

        let curElem = containerArray[i];

        console.log("curElem", curElem, typeof curElem);

        result += ` ${curElem},`


    };

    console.log("result", result, typeof result);

    return result;

};