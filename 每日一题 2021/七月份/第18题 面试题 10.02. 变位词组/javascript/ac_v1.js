/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    const res = [];
    const wordsMap = new Map();
    const getWordHash = (word) => {
        let charNum = new Array(26).fill(0);

        for (let i = 0, len = word.length; i < len; i++) {
            charNum[word.charCodeAt(i) - 97]++;
        }

        return charNum.join(",");
    };

    strs.forEach(word => {
        const wordHash = getWordHash(word);

        if (wordsMap.has(wordHash)) {
            wordsMap.get(wordHash).push(word);
        } else {
            wordsMap.set(wordHash, [word]);
        }
    });    

    wordsMap.forEach(words => {
        res.push(words);
    });

    return res;
};
