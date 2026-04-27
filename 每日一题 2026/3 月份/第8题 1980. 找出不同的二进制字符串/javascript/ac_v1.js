/**
 * @param {string[]} nums
 * @return {string}
 */
var findDifferentBinaryString = function(nums) {
    const total = nums.length;
    const res = new Array();

    for (let i = 0; i < total; i++) {
        res[i] = Number(nums[i][i]) ^ 1;
    }

    return res.join("");
};
