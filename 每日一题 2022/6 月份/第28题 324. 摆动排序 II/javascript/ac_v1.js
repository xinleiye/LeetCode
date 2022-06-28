/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var wiggleSort = function(nums) {
    const arr = nums.slice();
    arr.sort((n1, n2) => n1 - n2);

    const total = nums.length;
    let indexMid = Math.floor((nums.length + 1) / 2) - 1;
    let indexBig = total - 1;
    for (let i = 0; i < total; i += 2) {
        nums[i] = arr[indexMid];
        if (i + 1 < total) {
            nums[i + 1] = arr[indexBig];
        }
        indexMid--;
        indexBig--;
    }
};
