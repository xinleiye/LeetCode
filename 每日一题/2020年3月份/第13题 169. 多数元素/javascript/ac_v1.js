/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let res;
    let numMap = new Map();
    let half = Math.floor(nums.length / 2);

    nums.forEach((val) => {
        if (numMap.has(val)) {
            numMap.set(val, numMap.get(val) + 1);
        } else {
            numMap.set(val, 1);
        }
        if (numMap.get(val) > half) {
            res = val;
        }
    });

    return res;
};
