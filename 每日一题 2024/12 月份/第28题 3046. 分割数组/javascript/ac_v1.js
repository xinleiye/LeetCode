/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isPossibleToSplit = function(nums) {
    let max = Math.max(...nums);
    const count = new Array(max + 1).fill(0);

    for (const n of nums) {
        count[n]++;
        if (count[n] > 2) {
            return false;
        }
    }

    return true;
};
