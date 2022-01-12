/**
 * @param {number[]} nums
 * @return {boolean}
 */
var increasingTriplet = function(nums) {
    let first = nums[0];
    let second = Number.MAX_SAFE_INTEGER;
    const total = nums.length;

    for (let i = 1; i < total; i++) {
        const num = nums[i];

        if (num > second) {
            return true;
        } else if (num > first) {
            second = num;
        } else {
            first = num;
        }
    }

    return false;
};
