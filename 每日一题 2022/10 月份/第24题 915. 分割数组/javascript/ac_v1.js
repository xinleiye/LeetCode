/**
 * @param {number[]} nums
 * @return {number}
 */
var partitionDisjoint = function(nums) {
    const total = nums.length;
    let left = nums[0];
    let rightMin = new Array(total).fill(1e6);

    rightMin[total - 1] = nums[total - 1];
    for (let i = total - 2; i >= 0; i--) {
        rightMin[i] = Math.min(rightMin[i + 1], nums[i]);
    }
    for (let i = 1; i < total; i++) {
        if (left <= rightMin[i]) {
            return i;
        } else {
            left = Math.max(left, nums[i]);
        }
    }
};
