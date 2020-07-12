/**
 * @param {number[]} nums
 * @return {number}
 */
var minDifference = function(nums) {
    let res;

    if (nums.length <= 4) {
        return 0;
    }
    
    nums.sort((val1, val2) => {
        return val1 - val2;
    });
    
    res = nums[nums.length - 1] - nums[0];
    // nums: [a0, a1, a2, a3, ..., an-4, an-3, an-2, an-1]
    // n = nums.length;
    // 可能的操作，
    // 1：a0, a1, a2 替换为 a3 => an-1 - a3
    // 2: a0, a1 替换为 a2; an-1 替换为 an-2 => an-2 - a2
    // 3: a0 替换为 a1; an-2, an-1 替换为 an-3 => an-3 - a1
    // 4: an-3, an-2, an-1 替换为 an-4 => an-4 - a0
    // 以上四种情况取最小值
    for (let i = 0; i <= 3; i++) {
        res = Math.min(res, nums[nums.length - 4 + i] - nums[i]);
    }

    return res;
};
