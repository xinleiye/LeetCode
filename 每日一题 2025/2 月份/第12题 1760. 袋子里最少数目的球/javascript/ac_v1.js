/**
 * @param {number[]} nums
 * @param {number} maxOperations
 * @return {number}
 */
var minimumSize = function(nums, maxOperations) {
    let left = 1;
    let right = Math.max(...nums);
    let res = 0;

    while (left <= right) {
        const mid = (left + right) >>> 1;
        let ops = 0;

        for (const n of nums) {
            ops += Math.floor((n - 1) / mid);
        }
        if (ops <= maxOperations) {
            res = mid;
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }

    return res;
};
