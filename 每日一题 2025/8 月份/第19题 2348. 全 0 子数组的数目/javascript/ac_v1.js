/**
 * @param {number[]} nums
 * @return {number}
 */
var zeroFilledSubarray = function(nums) {
    let res = 0;
    const total = nums.length;
    let index = 0;

    while (index < total) {
        let start = index;

        while (index < total && nums[index] === 0) {
            index++;
        }
        res += (1 + index - start) * (index - start) / 2;
        index++;
    }

    return res;
};
