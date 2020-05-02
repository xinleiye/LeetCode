/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let res = 0;
    let left = 0;
    let right = -1;

    for (let i = 0; i < s.length; i++) {
        for (let j = left; j <= right; j++) {
            if (s[i] === s[j]) {
                left = j + 1;
                break;
            }
        }
        right++;
        res = Math.max(res, right - left + 1);
    }

    return res;
};
