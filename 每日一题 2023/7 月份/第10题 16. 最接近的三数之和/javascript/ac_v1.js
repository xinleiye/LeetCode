/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
    nums.sort((n1, n2) => n1 - n2);

    let res = 1e9 + 7;
    const total = nums.length;
    for (let i = 0; i < total; i++) {
        if (i > 0 && nums[i] === nums[i - 1]) {
            continue;
        }

        let n1 = nums[i];
        let left = i + 1;
        let right = total - 1;
        while (left < right) {
            const sum = n1 + nums[left] + nums[right];

            if (Math.abs(target - sum) < Math.abs(target - res)) {
                res = sum;
            }
            if (sum > target) {
                right--;
            } else if (sum < target) {
                left++;
            } else {
                return target;
            }
        }
    }

    return res;
};
