/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function(nums) {
    const res = [];
    let index = 0;
    const total = nums.length;

    while (index < total) {
        const left = nums[index];
        let right = nums[index];

        index++;
        while (index < total && nums[index] - nums[index - 1] === 1) {
            right = nums[index];
            index++;
        }
        if (left !== right) {
            res.push(`${left}->${right}`);
        } else {
            res.push(`${left}`);
        }
    }

    return res;
};
