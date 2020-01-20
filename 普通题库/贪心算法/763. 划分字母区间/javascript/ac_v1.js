/**
 * @param {string} S
 * @return {number[]}
 */
var partitionLabels = function(S) {
    let res = [];
    let lastIndex = 0;
    let subStrLen = 1;
    let charMap = new Map();

    for (let i = 0; i < S.length; i++) {
        charMap.set(S[i], i);
    }

    for (let i = 0; i < S.length; i++) {
        lastIndex = Math.max(lastIndex, charMap.get(S[i]));
        if (i === lastIndex) {
            res.push(subStrLen);
            subStrLen = 1
        } else {
            subStrLen++;
        }
    }

    return res;
};
