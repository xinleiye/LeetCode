/**
 * @param {string} s
 * @return {number}
 */
var findTheLongestSubstring = function(s) {
    let res = 0;
    let vowel = ["#", "a", "e", "i", "o", "u"];
    let status = 0;
    let statusMap = new Map();

    statusMap.set(status, 0);
    for (let i = 0; i < s.length; i++) {
        let index = vowel.indexOf(s[i]);

        if (index > 0) {
            status ^= 1 << index;
        }
        if (statusMap.has(status)) {
            res = Math.max(res, i + 1 - statusMap.get(status));
        } else {
            statusMap.set(status, i + 1);
        }
    }

    return res;
};
