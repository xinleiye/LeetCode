/**
 * @param {string} S
 * @return {number[]}
 */
var partitionLabels = function(S) {
    let res = [];
    let charLastIndex = 0;
    let subStrLen = 1;
    let charIndexMap = new Map();

    for (let i = 0; i < S.length; i++) {
        charIndexMap.set(S[i], i);
    }

    for (let i = 0; i < S.length; i++) {
        charLastIndex = Math.max(charIndexMap.get(S[i]), charLastIndex);
        if (charLastIndex === i) {
            res.push(subStrLen);
            subStrLen = 1;
        } else {
            subStrLen++;
        }
    }

    return res;
};
