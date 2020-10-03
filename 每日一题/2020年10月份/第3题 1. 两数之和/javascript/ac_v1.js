/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let left = 0;
    let right = nums.length - 1;
    let sortedIndex = new Array(nums.length);

    for (let i = 0; i < nums.length; i++) {
        sortedIndex[i] = i;
    }

    sortedIndex.sort((val1, val2) => {
        return nums[val1] - nums[val2];
    });

    while (left < right) {
        let sum = nums[sortedIndex[left]] + nums[sortedIndex[right]];

        if (sum < target) {
            left++;
        } else if (sum > target) {
            right--;
        } else {
            return [sortedIndex[left], sortedIndex[right]];
        }
    }
};
