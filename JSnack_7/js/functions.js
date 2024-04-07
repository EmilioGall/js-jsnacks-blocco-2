/**
 * Description: function returns an array with all the elements in (containerArray) except for the first one.
 * @param {object} containerArray array of elements.
 * @returns {object} 
 */
function removeFromStart(containerArray) {

    let outputArray = [];

    for (let i=1; i < (containerArray.length); i++) {

        let curElem = containerArray[i];

        console.log("curElem", curElem, typeof curElem);

        outputArray.push(curElem);

    };

    console.log("outputArray", outputArray, typeof outputArray);

    return outputArray;

};