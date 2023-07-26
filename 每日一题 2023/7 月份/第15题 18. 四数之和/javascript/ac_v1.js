/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function(nums, target) {
    const res = [];
    const total = nums.length;
    nums.sort((n1, n2) => n1 - n2);
    for (let i = 0; i < total - 3; i++) {
        const a = nums[i];
        if (i > 0 && nums[i] === nums[i - 1]) {
            continue;
        }
        for (let j = i + 1; j < total - 2; j++) {
            const b = nums[j];
            if (j > i + 1 && nums[j] === nums[j - 1]) {
                continue;
            }

            let left = j + 1;
            let right = total - 1;
            while (left < right) {
                const sum = a + b + nums[left] + nums[right];
                if (sum === target) {
                    res.push([a, b, nums[left], nums[right]]);
                    while (left < right && nums[left] === nums[left + 1]) {
                        left++;
                    }
                    while (left < right && nums[right] === nums[right - 1]) {
                        right--;
                    }
                    left++;
                    right--;
                } else if (sum > target) {
                    right--;
                } else {
                    left++;
                }
            }
        }
    }

    return res;
};
