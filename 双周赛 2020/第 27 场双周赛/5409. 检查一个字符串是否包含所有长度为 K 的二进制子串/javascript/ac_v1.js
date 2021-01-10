/**
 * @param {string} s
 * @param {number} k
 * @return {boolean}
 */
var hasAllCodes = function(s, k) {
    let mod = 0;
    let totalCount = 1 << k;
    let numSet = new Set();
    let curNum = 0;
    let right = 0;

    for (let i = 1; i < k; i++) {
        mod = (mod << 1) | 1;
    }

    while (right < k) {
        curNum = (curNum << 1) | parseInt(s[right], 10);
        right++;
    }
    numSet.add(curNum);

    while (right < s.length) {
        curNum = ((curNum & mod) << 1) | parseInt(s[right], 10);
        right++;
        if (!numSet.has(curNum)) {
            numSet.add(curNum);
            if (numSet.size === totalCount) {
                return true;
            }
        }
    }

    return false;
};
