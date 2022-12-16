/**
 * @param {number[]} nums
 * @param {number} limit
 * @param {number} goal
 * @return {number}
 */
var minElements = function(nums, limit, goal) {
    const sum = nums.reduce((val1, val2) => {
        return val1 + val2;
    });

    return Math.ceil(Math.abs(goal - sum) / limit);
};
