/**
 * @param {number[]} nums
 * @return {number[]}
 */
var numberGame = function(nums) {
    const res = [];
    let pos = 1;
    const total = nums.length;

    nums.sort((n1, n2) => n1 - n2);
    while (pos < total) {
        res.push(nums[pos]);
        res.push(nums[pos - 1]);
        pos += 2;
    }

    return res;
};
