/**
 * @param {string} s
 * @return {number}
 */
var minimumCost = function(s) {
    let res = 0;
    const total = s.length;

    for (let i = 0; i < total; i++) {
        if (s[i] !== s[i - 1]) {
            res += Math.min(i, total - i);
        }
    }

    return res;
};
