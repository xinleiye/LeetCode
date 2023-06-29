/**
 * @param {number} upper
 * @param {number} lower
 * @param {number[]} colsum
 * @return {number[][]}
 */
var reconstructMatrix = function(upper, lower, colsum) {
    let sum = 0;
    let count2 = 0;
    for (const n of colsum) {
        sum += n;
        if (n === 2) {
            count2++;
        }
    }
    if (sum !== upper + lower || count2 > Math.min(upper, lower)) {
        return [];
    }

    const total = colsum.length;
    const res = [new Array(total).fill(0), new Array(total).fill(0)];
    upper -= count2;
    lower -= count2;
    for (let i = 0; i < total; i++) {
        if (colsum[i] === 2) {
            res[0][i] = 1;
            res[1][i] = 1;
        } else if (colsum[i] === 1) {
            if (upper > 0) {
                res[0][i] = 1;
                upper--;
            } else {
                res[1][i] = 1;
            }
        }
    }

    return res;
};
