/**
 * Description: function returns an array with all the elements in (containerArray) except for the last one.
 * @param {object} containerArray array of elements.
 * @returns {object} 
 */
function removeFromEnd(containerArray) {

    let outputArray = [];

    for (let i=0; i < (containerArray.length -1); i++) {

        let curElem = containerArray[i];

        console.log("curElem", curElem, typeof curElem);

        outputArray.push(curElem);

    };

    console.log("outputArray", outputArray, typeof outputArray);

    return outputArray;

};