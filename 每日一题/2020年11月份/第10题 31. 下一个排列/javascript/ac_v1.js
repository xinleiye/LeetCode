/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function(nums) {
    let little = nums.length - 2;
    let swap = (arr, index1, index2) => {
        let tmp = arr[index1];

        arr[index1] = arr[index2];
        arr[index2] = tmp;
    };

    while (little >= 0 && nums[little] >= nums[little + 1]) {
        little--;
    }
    if (little >= 0) {
        let big = nums.length - 1;

        while (big >= 0 && nums[little] >= nums[big]) {
            big--;
        }
        swap(nums, little, big);
    }

    for (let i = 0, len = Math.floor((nums.length - little - 1) / 2); i < len; i++) {
        swap(nums, i + little + 1, nums.length - 1 - i)
    }
};
