/**
 * @param {number[]} nums
 * @return {number}
 */
var minImpossibleOR = function(nums) {
    const numSet = new Set();
    let m = 0;

    for (const n of nums) {
        numSet.add(n);
    }
    while (numSet.has(Math.pow(2, m))) {
        m++;
    }

    return Math.pow(2, m);
};
