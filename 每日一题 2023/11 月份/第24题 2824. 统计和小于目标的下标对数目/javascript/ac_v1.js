/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var countPairs = function(nums, target) {
    let res = 0;
    const total = nums.length;

    nums.sort((n1, n2) => n1 - n2);
    for (let i = 0; i < total; i++) {
        for (let j = i + 1; j < total; j++) {
            if (nums[i] + nums[j] < target) {
                res++;
            } else {
                break;
            }
        }
    }

    return res;
};
