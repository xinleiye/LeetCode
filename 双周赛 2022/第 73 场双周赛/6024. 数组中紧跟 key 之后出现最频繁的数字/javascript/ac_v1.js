/**
 * @param {number[]} nums
 * @param {number} key
 * @return {number}
 */
var mostFrequent = function(nums, key) {
    let res = 0;
    let resCount = 0;
    const targetCountMap = new Map();
    const total = nums.length;

    for (let i = 0; i < total - 1; i++) {
        if (nums[i] === key) {
            targetCountMap.set(nums[i + 1], targetCountMap.has(nums[i + 1]) ? targetCountMap.get(nums[i + 1]) + 1 : 1);
        }
    }
    targetCountMap.forEach((count, num) => {
        if (count > resCount) {
            res = num;
            resCount = count;
        }
    });

    return res;
};
