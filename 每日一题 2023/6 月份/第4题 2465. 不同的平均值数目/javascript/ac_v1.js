/**
 * @param {number[]} nums
 * @return {number}
 */
var distinctAverages = function(nums) {
    let averageSet = new Set();
    let left = 0;
    let right = nums.length - 1;

    nums.sort((n1, n2) => n1 - n2);
    while (left < right) {
        averageSet.add(nums[left] + nums[right]);
        left++;
        right--;
    }

    return averageSet.size;
};
