/**
 * Description: function returns index of (elemToFind) in (containerArray).
 * @param {object} containerArray array of elements.
 * @returns {number} index of element in (containerArray).
 */
function findIndex(containerArray, elemToFind) {

    let result = -1;

    for (let i=0; i < containerArray.length; i++) {

        let curElem = containerArray[i];

        console.log("curElem", curElem, typeof curElem);

        if (curElem === elemToFind) {

            result = i;

            break;

        };

    };

    return result;

};