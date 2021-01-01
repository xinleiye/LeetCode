/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function(nums) {
    let res = 0;
    let left = 1;
    let right = nums.length - 1;

    while (left <= right) {
        let count = 0;
        let mid = Math.floor((left + right) / 2);

        for (let i = 0; i < nums.length; i++) {
            if (nums[i] <= mid) {
                count++;
            }
        }
        if (count <= mid) {
            left = mid + 1;
        } else {
            right = mid - 1;
            res = mid;
        }
    }

    return res;
};
