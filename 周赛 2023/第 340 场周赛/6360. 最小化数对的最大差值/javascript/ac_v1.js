/**
 * @param {number[]} nums
 * @param {number} p
 * @return {number}
 */
var minimizeMax = function(nums, p) {
    nums.sort((n1, n2) => n1 - n2);

    const total = nums.length;
    let left = -1;
    let right = nums[total - 1] - nums[0];
    const check = (arr, tarVal, tarCount) => {
        let count = 0;
        let index = 1;
        const total = arr.length;

        while (index < total) {
            if (nums[index] - nums[index - 1] <= tarVal) {
                count++;
                index += 2;
            } else {
                index++;
            }
        }

        return count >= tarCount;
    };
    while (left + 1 < right) {
        const mid = (left + right) >>> 1;

        if (check(nums, mid, p)) {
            right = mid;
        } else {
            left = mid;
        }
    }

    return right;
};
