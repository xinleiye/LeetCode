/**
 * @param {number[]} nums
 * @return {number}
 */
var countMaxOrSubsets = function(nums) {
    let res = 0;
    let maxNum = 0;
    const maxPow = Math.pow(2, nums.length)

    nums.forEach(num => {
        maxNum |= num;
    });
    for (let i = 1; i < maxPow; i++) {
        let index = 0;
        let bits = i;
        let num = 0;

        while (bits > 0) {
            if (bits & 1) {
                num |= nums[index];
            }
            bits = bits >>> 1;
            index++;
        }
        if (num === maxNum) {
            res++;
        }
    }

    return res;
};
