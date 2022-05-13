/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDuplicates = function(nums) {
    const res = [];
    const swap = (arr, index1, index2) => {
        const tmp = arr[index1];
        arr[index1] = arr[index2];
        arr[index2] = tmp;
    };
    const total = nums.length;

    for (let i = 0; i < total; i++) {
        while (nums[i] !== nums[nums[i] - 1]) {
            swap(nums, i, nums[i] - 1);
        }
    }
    for (let i = 0; i < total; i++) {
        if (nums[i] - 1 !== i) {
            res.push(nums[i]);
        }
    }

    return res;
};
