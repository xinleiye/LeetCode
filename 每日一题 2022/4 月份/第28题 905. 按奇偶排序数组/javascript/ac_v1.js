/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParity = function(nums) {
    let res = nums.slice();
    let left = 0;
    let right = nums.length - 1;

    while (left < right) {
        while (left < right && res[left] % 2 === 0) {
            left++;
        }
        while (left < right && res[right] % 2 === 1) {
            right--;
        }
        if (left < right) {
            let tmp = res[left];
            res[left] = res[right];
            res[right] = tmp;
            left++;
            right--;
        }
    }

    return res;
};
