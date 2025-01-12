/**
 * @param {number[]} candidates
 * @return {number}
 */
var largestCombination = function(candidates) {
    let res = 0;
    let max = Math.max(...candidates);
    let maxPow = 0;

    while (max) {
        maxPow++;
        max = max >>> 1;
    }
    for (let i = 0; i < maxPow; i++) {
        res = Math.max(res, bitCountKth(candidates, i));
    }

    return res;
};

function bitCountKth(arr, k) {
    let count = 0;

    for (const n of arr) {
        if (n & (1 << k)) {
            count++;
        }
    }

    return count;
}
