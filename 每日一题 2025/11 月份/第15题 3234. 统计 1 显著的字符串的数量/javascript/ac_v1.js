/**
 * @param {string} s
 * @return {number}
 */
var numberOfSubstrings = function(s) {
    const total = s.length;
    const pos0 = [-1];
    let one = 0;
    let res = 0;
    for (let right = 0; right < total; right++) {
        if (s[right] === "0") {
            pos0.push(right);
        } else {
            one++;
            res += right - pos0[pos0.length - 1];
        }

        const zeroCount = pos0.length;
        for (let left = zeroCount - 1; left > 0 && Math.pow(zeroCount - left, 2) <= one; left--) {
            const count0 = zeroCount - left;
            const count1 = right - pos0[left] + 1 - count0;
            res += Math.max(0, pos0[left] - Math.max(count0 * count0 - count1, 0) - pos0[left - 1]);
        }
    }

    return res;
};
