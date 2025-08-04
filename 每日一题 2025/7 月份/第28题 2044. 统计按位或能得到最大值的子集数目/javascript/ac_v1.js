/**
 * @param {number[]} nums
 * @return {number}
 */
var countMaxOrSubsets = function(nums) {
    let maxOr = 0;
    for (const n of nums) {
        maxOr |= n;
    }

    let maxPow = Math.pow(2, nums.length);
    let res = 0;
    for (let i = 1; i < maxPow; i++) {
        let bit = i;
        let index = 0;
        let numOr = 0;
        while (bit) {
            if (bit & 1) {
                numOr |= nums[index];
            }
            index++;
            bit = bit >>> 1;
        }
        if (numOr === maxOr) {
            res++;
        }
    }

    return res;
};
