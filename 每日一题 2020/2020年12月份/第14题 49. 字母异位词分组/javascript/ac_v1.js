/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    let res = [];
    const wordMap = new Map();

    let getWordHash = (word) => {
        return word.split("").sort((val1, val2) => {
            return val1 < val2 ? -1 : 1;
        }).join("");
    };

    strs.forEach(word => {
        let wh = getWordHash(word);

        if (wordMap.has(wh)) {
            wordMap.get(wh).push(word);
        } else {
            wordMap.set(wh, [word]);
        }
    });

    wordMap.forEach(val => {
        res.push(val);
    });

    return res;
};
