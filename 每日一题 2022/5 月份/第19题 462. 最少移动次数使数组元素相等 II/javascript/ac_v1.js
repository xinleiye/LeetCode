/**
 * @param {number[]} nums
 * @return {number}
 */
var minMoves2 = function(nums) {
    nums.sort((n1, n2) => n1 - n2);
    const total = nums.length;
    const val = nums[Math.floor(total / 2)];
    let res = 0;

    for (let i = 0; i < total; i++) {
        res += Math.abs(nums[i] - val);
    }

    return res;
};
