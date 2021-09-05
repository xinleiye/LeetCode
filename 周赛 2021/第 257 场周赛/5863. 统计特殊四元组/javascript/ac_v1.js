/**
 * @param {number[]} nums
 * @return {number}
 */
var countQuadruplets = function(nums) {
    let res = 0;
    const length = nums.length;

    for (let i = 0; i < length; i++) {
        for (let j = i + 1; j < length; j++) {
            for (let k = j + 1; k < length; k++) {
                for (let m = k + 1; m < length; m++) {
                    if (nums[i] + nums[j] + nums[k] === nums[m]) {
                        res++;
                    }
                }
            }
        }
    }

    return res;
};
