/**
 * @param {string} s
 * @param {number} k
 * @param {number[][]} queries
 * @return {number[]}
 */
var countKConstraintSubstrings = function(s, k, queries) {
    const total = s.length;
    const count = [0, 0];
    const right = new Array(total).fill(total);
    const preSum = new Array(total + 1).fill(0);
    let left = 0;
    const res = [];

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
            right[left] = i;
            left++;
        }
        preSum[i + 1] = preSum[i] + i - left + 1;
    }
    for (const [l, r] of queries) {
        const r1 = Math.min(right[l], r + 1);

        res.push((r1 - l + 1) * (r1 - l) / 2 + preSum[r + 1] - preSum[r1]);
    }

    return res;
};
