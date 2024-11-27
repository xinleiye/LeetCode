/**
 * @param {number} l
 * @param {number} r
 * @return {number}
 */
var nonSpecialCount = function(l, r) {
    const max = Math.floor(Math.sqrt(r));
    const flag = new Array(max + 1).fill(false);
    let res = r - l + 1;

    for (let i = 2; i <= max; i++) {
        if (!flag[i]) {
            if (i * i >= l && i * i <= r) {
                res--;
            }
            for (let j = i * 2; j <= max; j += i) {
                flag[j] = true;
            }
        }
    }

    return res;
};
