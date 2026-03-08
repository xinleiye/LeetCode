/**
 * @param {string} s
 * @return {number}
 */
var minFlips = function(s) {
    const total = s.length;
    let res = total;
    let count = 0;
    for (let i = 0; i < total * 2 - 1; i++) {
        const bits = Number(s[i % total]);
        if (bits % 2 !== i % 2) {
            count++;
        }

        const left = i - total + 1;
        if (left < 0) {
            continue;
        }
        res = Math.min(res, Math.min(count, total - count));
        if (s[left] % 2 !== left % 2) {
            count--;
        }
    }

    return res;
};
