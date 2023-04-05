/**
 * @param {number[]} nums
 * @return {number}
 */
var maximizeGreatness = function(nums) {
    let res = 0;
    let index = 0;
    const total = nums.length;

    nums.sort((n1, n2) => n1 - n2);
    for (const n of nums) {
        while (index < total && nums[index] <= n) {
            index++;
        }
        if (index >= total) {
            break;
        }
        res++;
        index++;
    }

    return res;
};
