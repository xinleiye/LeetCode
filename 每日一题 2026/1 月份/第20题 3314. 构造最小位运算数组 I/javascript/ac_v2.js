/**
 * @param {number[]} nums
 * @return {number[]}
 */
var minBitwiseArray = function(nums) {
    const total = nums.length;
    const res = new Array(total).fill(-1);

    for (let i = 0; i < total; i++) {
        const num = nums[i];

        for (let j = 1; j < num; j++) {
            if ((j | (j + 1)) === num) {
                res[i] = j;
                break;
            }
        }
    }

    return res;
};
