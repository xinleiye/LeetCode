/**
 * @param {string[]} words
 * @param {string} chars
 * @return {number}
 */
var countCharacters = function(words, chars) {
    let res = 0;
    let charsMap;
    let getWordsMap = (aWord) => {
        let map = new Map();

        for (let i = 0, len = aWord.length; i < len; i++) {
            if (map.has(aWord[i])) {
                map.set(aWord[i], map.get(aWord[i]) + 1);
            } else {
                map.set(aWord[i], 1);
            }
        }

        return map;
    };
    let isValidWord = (wordMap, charMap) => {
        let valid = true;

        wordMap.forEach((key, val) => {
            if (valid) {
                if (!charMap.has(val)) {
                    valid = false;
                } else {
                    if (charMap.get(val) < wordMap.get(val)) {
                        valid = false;
                    }
                }
            }
        });

        return valid;
    };

    charsMap = getWordsMap(chars);

    words.forEach((word) => {
        if (isValidWord(getWordsMap(word), charsMap)) {
            res += word.length;
        }
    });

    return res;
};
