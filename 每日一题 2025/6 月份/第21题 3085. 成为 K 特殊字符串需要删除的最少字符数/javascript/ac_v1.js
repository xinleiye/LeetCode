/**
 * @param {string} word
 * @param {number} k
 * @return {number}
 */
var minimumDeletions = function(word, k) {
    const chCount = new Array(26).fill(0);
    for (const ch of word) {
        chCount[ch.charCodeAt(0) - 97]++;
    }
    chCount.sort((c1, c2) => c1 - c2);

    let res = word.length;
    let pre = 0;
    for (let i = 0; i < 26; i++) {
        let del = 0;
        for (let j = i + 1; j < 26; j++) {
            del += chCount[j] - chCount[i] > k ? chCount[j] - chCount[i] - k : 0;
        }
        res = Math.min(res, del + pre);
        pre += chCount[i];
    }

    return res;
};
