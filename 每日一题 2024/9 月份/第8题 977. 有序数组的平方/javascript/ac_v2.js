/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
    const res = new Array(nums.length);
    let pos = nums.length - 1;
    let left = 0;
    let right = nums.length - 1;

    while (left <= right) {
        const vall = Math.pow(nums[left], 2);
        const valr = Math.pow(nums[right], 2);

        if (vall >= valr) {
            res[pos] = vall;
            left++;
        } else {
            res[pos] = valr;
            right--;
        }
        pos--;
    }

    return res;
};
