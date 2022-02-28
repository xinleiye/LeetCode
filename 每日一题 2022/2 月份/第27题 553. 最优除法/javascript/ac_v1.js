/**
 * @param {number[]} nums
 * @return {string}
 */
var optimalDivision = function(nums) {
    const size = nums.length;

    if (size === 1) {
        return `${nums[0]}`;
    }
    if (size === 2) {
        return `${nums[0]}/${nums[1]}`;
    }

    return `${nums[0]}/(${nums.slice(1).join("/")})`;
};
