/**
 * @param {number[]} nums
 * @return {number}
 */
var triangleNumber = function(nums) {
    nums.sort((n1, n2) => n1 - n2);

    let res = 0;
    const total = nums.length;
    for (let i = 2; i < total; i++) {
        const c = nums[i];
        let left = 0;
        let right = i - 1;
        while (left < right) {
            if (nums[left] + nums[right] > c) {
                res += right - left;
                right--;
            } else {
                left++;
            }
        }
    }

    return res;
};
