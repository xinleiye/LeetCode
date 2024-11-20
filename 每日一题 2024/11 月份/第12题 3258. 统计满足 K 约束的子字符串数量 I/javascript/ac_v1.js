/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var countKConstraintSubstrings = function(s, k) {
    let res = 0;
    let left = 0;
    const count = new Array(2).fill(0);
    const total = s.length;

    for (let i = 0; i < total; i++) {
        if (s[i] === "0") {
            count[0]++;
        } else {
            count[1]++;
        }
        while (count[0] > k && count[1] > k) {
            if (s[left] === "0") {
                count[0]--;
            } else {
                count[1]--;
            }
            left++;
        }
        res += i - left + 1;
    }

    return res;
};
