/**
 * @param {string} s
 * @return {number}
 */
var countPalindromicSubsequence = function(s) {
    let res = 0;
    const total = s.length;
    for (let i = 0; i < 26; i++) {
        const mid = String.fromCharCode(i + 97);
        let left = 0;
        let right = total - 1;
        while (left < total && s[left] !== mid) {
            left++;
        }
        if (left >= total - 2) {
            continue;
        }
        while (right > left + 1 && s[right] !== mid) {
            right--;
        }
        if (right - left < 2) {
            continue;
        }

        const chSet = new Set();
        for (let j = left + 1; j < right; j++) {
            chSet.add(s[j]);
        }
        res += chSet.size;
    }

    return res;
};
