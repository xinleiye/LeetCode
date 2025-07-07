/**
 * @param {number[]} arr
 * @return {number}
 */
var findLucky = function(arr) {
    let res = -1;
    const MAX = 501;
    const count = new Array(MAX).fill(0);

    for (const n of arr) {
        count[n]++;
    }
    for (let i = MAX; i > 0; i--) {
        if (count[i] === i) {
            res = i;
            break;
        }
    }

    return res;
};
