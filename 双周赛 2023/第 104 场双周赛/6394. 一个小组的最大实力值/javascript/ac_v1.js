/**
 * @param {number[]} nums
 * @return {number}
 */
var maxStrength = function(nums) {
    const total = nums.length;
    const pow = Math.pow(2, total);
    let res = nums[0];

    for (let i = 1; i < pow; i++) {
        let curStrength = 1;
        let mask = i;
        let index = 0;

        while (mask) {
            if (mask & 1) {
                curStrength *= nums[index];
            }
            index++;
            mask = mask >>> 1;
        }
        res = Math.max(res, curStrength);
    }

    return res;
};
