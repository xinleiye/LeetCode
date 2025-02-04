/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParityII = function(nums) {
    let oddIndex = 1;
    const total = nums.length;

    for (let i = 0; i < total; i += 2) {
        if (nums[i] % 2 === 1) {
            while (nums[oddIndex] % 2 === 1) {
                oddIndex += 2;
            }
            swap(nums, oddIndex, i);
        }
    }

    return nums;
};

function swap(arr, i1, i2) {
    const tmp = arr[i1];

    arr[i1] = arr[i2];
    arr[i2] = tmp;
}
