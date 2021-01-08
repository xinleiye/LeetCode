/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    const length = nums.length;
    let steps = k % length;
    const reverse = (arr, start, end) => {
        while (start < end) {
            let tmp  = arr[start];

            arr[start] = arr[end];
            arr[end] = tmp;
            start++;
            end--;
        }
    };

    reverse(nums, 0, length - 1);
    reverse(nums, 0, steps - 1);
    reverse(nums, steps, length - 1);
};
