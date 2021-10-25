/**
 * @param {string} sentence
 * @return {number}
 */
var countValidWords = function(sentence) {
    let res = 0;
    let index = 0;
    const length = sentence.length;
    const isValidWord = (word) => {
        let hyphenNum = 0;
        const length = word.length;

        if (word[0] === '-' || word[length - 1] === '-') {
            return false;
        }
        for (let i = 0; i < length; i++) {
            if (word[i] >= '0' && word[i] <= '9') {
                return false;
            } else if (word[i] === '-') {
                hyphenNum++;
                if (hyphenNum > 1) {
                    return false;
                }
            } else if ((word[i] === '!' || word[i] === '.' || word[i] === ',') && (i !== length - 1)) {
                return false;
            }
        }
        if (hyphenNum === 1) {
            if (word[length - 2] === '-' && (word[length - 1] === '!' || word[length - 1] === '.' || word[length - 1] === ',')) {
                return false;
            }
        }

        return true;
    };

    while (index < length) {
        if (sentence[index] !== ' ') {
            let word = [];
            while (index < length && sentence[index] !== ' ') {
                word.push(sentence[index]);
                index++;
            }
            if (isValidWord(word)) {
                res++;
            }
        }
        index++;
    }

    return res;
};
