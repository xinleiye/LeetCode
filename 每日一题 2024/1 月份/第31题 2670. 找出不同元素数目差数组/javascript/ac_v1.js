/**
 * @param {number[]} nums
 * @return {number[]}
 */
var distinctDifferenceArray = function(nums) {
    const total = nums.length;
    const preNumSet = new Set();
    const res = new Array(total).fill(0);

    for (let i = 0; i < total; i++) {
        const postNumSet = new Set();

        preNumSet.add(nums[i]);
        for (let j = i + 1; j < total; j++) {
            postNumSet.add(nums[j]);
        }
        res[i] = preNumSet.size - postNumSet.size;
    }

    return res;
};
