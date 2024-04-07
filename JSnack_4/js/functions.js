/**
 * Description: function return true if strings in stringsArray have same length.
 * @param {object} inputArray array of elements.
 * @returns {number} number of array elements.
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