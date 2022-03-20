/**
 * @param {number[]} nums
 * @return {number}
 */
var countMaxOrSubsets = function(nums) {
    let res = 0;
    let maxNum = 0;
    const maxPow = Math.pow(2, nums.length);

    for (let i = 1; i < maxPow; i++) {
        let bits = i;
        let index = 0;
        let num = 0;

        while (bits) {
            if (bits & 1) {
                num |= nums[index];
            }
            bits = bits >>> 1;
            index++;
        }
        if (num > maxNum) {
            maxNum = num;
            res = 1;
        } else if (num === maxNum) {
            res++;
        }
    }

    return res;
};
