/**
 * @param {number[]} nums
 * @return {number[]}
 */
var rearrangeArray = function(nums) {
    let res = new Array(nums.length);
    let length = nums.length;
    let half = (nums.length + 1) >>> 1;
    let index = 0;

    nums.sort((val1, val2) => {
        return val1 - val2;
    });

    for (let i = 0; i < half; i++) {
        res[index] = nums[i];
        if (i + half < length) {
            res[index + 1] = nums[i + half];
        }
        index += 2;
    }

    return res;
};
