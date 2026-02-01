/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumCost = function(nums) {
    let min1 = 51;
    let min2 = 51;
    const total = nums.length;

    for (let i = 1; i < total; i++) {
        const n = nums[i];

        if (n < min1) {
            min2 = min1;
            min1 = n;
        } else if (n < min2) {
            min2 = n;
        }
    }

    return nums[0] + min1 + min2;
};
