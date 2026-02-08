/**
 * @param {number[]} nums
 * @return {number[]}
 */
var constructTransformedArray = function(nums) {
    const total = nums.length;
    const res = new Array(total);

    for (let i = 0; i < total; i++) {
        const n = nums[i] % total;

        if (n > 0) {
            res[i] = nums[(i + n) % total];
        } else if (n < 0) {
            res[i] = nums[(i + n + total) % total];
        } else {
            res[i] = nums[i];
        }
    }

    return res;
};
