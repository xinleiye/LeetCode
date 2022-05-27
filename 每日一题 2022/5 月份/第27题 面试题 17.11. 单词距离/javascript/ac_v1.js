/**
 * @param {string[]} words
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var findClosest = function(words, word1, word2) {
    const wordMap = new Map();
    const total = words.length
    for (let i = 0; i < total; i++) {
        const w = words[i];
        if (wordMap.has(w)) {
            wordMap.get(w).push(i);
        } else {
            wordMap.set(w, [i]);
        }
    }

    let res = total;
    let p1 = 0;
    const index1 = wordMap.get(word1);
    let p2 = 0;
    const index2 = wordMap.get(word2);
    while (p1 < index1.length && p2 < index2.length) {
        const i1 = index1[p1];
        const i2 = index2[p2];
        res = Math.min(Math.abs(i1 - i2), res);
        if (i1 < i2) {
            p1++;
        } else {
            p2++;
        }
    }

    return res;
};
