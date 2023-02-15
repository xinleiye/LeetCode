/**
 * @param {string} s
 * @return {number}
 */
var balancedString = function(s) {
    let res = s.length;
    let left = 0;
    let right = s.length - 1;
    const count = s.length / 4;
    const charCount = {
        Q: 0,
        W: 0,
        E: 0,
        R: 0
    };

    while (left <= right) {
        if (charCount[s[left]] < count) {
            charCount[s[left++]]++;
        } else {
            break;
        }
    }
    while (charCount[s[right]] < count) {
        charCount[s[right--]]++;
    }
    res = Math.min(res, right - left + 1);

    left--;
    while (left >= 0) {
        charCount[s[left--]]--;
        while (charCount[s[right]] < count) {
            charCount[s[right--]]++;
        }
        res = Math.min(res, right - left);
    }

    return res;
};
