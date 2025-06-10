/**
 * @param {string} s
 * @return {number}
 */
var maxDifference = function(s) {
    let maxOdd = 0;
    let minEven = s.length;
    const chCount = new Array(26).fill(0);

    for (const ch of s) {
        chCount[ch.charCodeAt(0) - 97]++;
    }
    for (const c of chCount) {
        if (c % 2 === 1) {
            maxOdd = Math.max(maxOdd, c);
        } else if (c > 0) {
            minEven = Math.min(minEven, c);
        }
    }

    return maxOdd - minEven;
};
