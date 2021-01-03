/**
 * @param {string} text
 * @return {string}
 */
var arrangeWords = function(text) {
    let res = [];
    let wordArr = text.split(" ");
    let wordLenMap = new Map();
    let wordLenArr = [];
    
    wordArr[0] = wordArr[0][0].toLowerCase() + wordArr[0].substring(1);
    wordArr.forEach(aWord => {
        if (wordLenMap.has(aWord.length)) {
            wordLenMap.get(aWord.length).push(aWord);
        } else {
            wordLenMap.set(aWord.length, [aWord]);
        }
    });

    wordLenMap.forEach((val, key) => {
        wordLenArr.push(key);
    });

    wordLenArr.sort((len1, len2) => {
        return len1 - len2;
    });

    wordLenArr.forEach(aLen => {
        res.push(...wordLenMap.get(aLen));
    });

    res[0] = res[0][0].toUpperCase() + res[0].slice(1);

    return res.join(" ");
};
