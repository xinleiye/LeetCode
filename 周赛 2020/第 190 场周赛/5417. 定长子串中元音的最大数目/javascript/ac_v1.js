/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var maxVowels = function(s, k) {
    let res = 0;
    let left = 0;
    let right = 0;
    let length = s.length;
    let vowel = ["a", "e", "i", "o", "u"];
    let count = 0;

    while (right < k) {
        if (vowel.indexOf(s[right]) >= 0) {
            count++;
        }
        right++;
    }

    res = Math.max(res, count);
    while (right < length) {
        if (vowel.indexOf(s[right]) >= 0) {
            count++;
        }
        if (vowel.indexOf(s[left]) >= 0) {
            count--;
        }
        res = Math.max(res, count);
        right++;
        left++;
    }
    
    return res;
};
