/**
 * @param {string[]} queries
 * @param {string[]} words
 * @return {number[]}
 */
var numSmallerByFrequency = function(queries, words) {
    const MAX = 11;
    const freqArr = new Array(MAX).fill(0);
    const wordsCount = words.length;
    const queryCount = queries.length;
    const res = new Array(queryCount);

    for (let i = 0; i < wordsCount; i++) {
        freqArr[calcFreq(words[i])]++;
    }
    for (let i = 0; i < queryCount; i++) {
        let  queryRes = 0;

        for (let j = calcFreq(queries[i]) + 1; j < MAX; j++) {
            queryRes += freqArr[j];
        }
        res[i] = queryRes;
    }

    return res;
};

function calcFreq(str) {
    const chType = 26;
    const chCount = new Array(chType).fill(0);

    for (const ch of str) {
        chCount[ch.charCodeAt() - 97]++;
    }
    for (const count of chCount) {
        if (count) {
            return count;
        }
    }

    return 0;
}
