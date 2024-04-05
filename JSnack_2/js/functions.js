function lengthEval (firstWord, secondWord) {

    let longest = "";

    if (firstWord.length < secondWord.length) {

        longest = "first";

    } else if (firstWord.length > secondWord.length) {
        
        longest = "second";

    } else{

        longest = "same";
        
    };

    return longest;
};