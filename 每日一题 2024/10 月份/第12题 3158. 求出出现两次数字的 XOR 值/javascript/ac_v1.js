/**
 * @param {number[]} nums
 * @return {number}
 */
var duplicateNumbersXOR = function(nums) {
    let res = 0;
    const numSet = new Set()

    for (const n of nums) {
        if (numSet.has(n)) {
            res ^= n;
        } else {
            numSet.add(n);
        }
    }

    return res;
};
