/**
 * @param {number[]} nums
 * @return {number}
 */
var longestBalanced = function(nums) {
    const total = nums.length;
    let res = 0;

    for (let i = 0; i < total; i++) {
        const oddSet = new Set();
        const evenSet = new Set();

        for (let j = i; j < total; j++) {
            if (nums[j] % 2 === 1) {
                oddSet.add(nums[j]);
            } else {
                evenSet.add(nums[j]);
            }
            if (oddSet.size === evenSet.size) {
                res = Math.max(res, j - i + 1);
            }
        }
    }

    return res;
};
