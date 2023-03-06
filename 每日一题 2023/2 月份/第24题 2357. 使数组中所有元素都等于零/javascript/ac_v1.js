/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumOperations = function(nums) {
    const numSet = new Set();

    for (const n of nums) {
        if (n !== 0 ) {
            numSet.add(n);
        }
    }

    return numSet.size;
};
