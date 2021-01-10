/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function(nums) {
    const res = [];
    const length = nums.length;
    let index = 0;

    while (index < length) {
        let end = index + 1;

        while (nums[end] - nums[end - 1] === 1) {
            end++;
        }

        if (end === index + 1) {
            res.push(`${nums[index]}`);
        } else {
            res.push(`${nums[index]}->${nums[end - 1]}`);
        }
        index = end;
    }

    return res;
};
