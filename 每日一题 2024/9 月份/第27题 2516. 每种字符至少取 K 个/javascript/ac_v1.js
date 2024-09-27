/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var takeCharacters = function(s, k) {
    const count = new Array(3).fill(0);
    for (const ch of s) {
        count[ch.charCodeAt(0) - 97]++;
    }
    if (count[0] < k || count[1] < k || count[2] < k) {
        return -1;
    }

    let left = 0;
    let right = 0;
    const total = s.length;
    let res = s.length;
    while (right < total) {
        count[s.charCodeAt(right) - 97]--;
        while (left < right && (count[0] < k || count[1] < k | count[2] < k)) {
            count[s.charCodeAt(left) - 97]++;
            left++;
        }
        if (count[0] >= k && count[1] >= k && count[2] >= k) {
            res = Math.min(res, total - (right - left + 1));
        }
        right++;
    }

    return res;
};
