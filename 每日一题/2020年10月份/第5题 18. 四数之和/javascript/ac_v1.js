/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function(nums, target) {
    const length = nums.length;
    let res = [];
    
    nums.sort((val1, val2) => {
        return val1 - val2;
    });

    for (let i = 0; i < length - 3; i++) {
        if (i > 0 && nums[i] === nums[i - 1]) {
            continue;
        }
        for (let j = i + 1; j < length - 2; j++) {
            let left;
            let right;
            let rest;

            if (j > i + 1 && nums[j] === nums[j - 1]) {
                continue;
            }
            left = j + 1;
            right = length - 1;
            rest = target - nums[i] - nums[j];
            while (left < right) {
                let sum = nums[left] + nums[right];

                if (sum > rest) {
                    right--;
                } else if (sum < rest) {
                    left++;
                } else {
                    res.push([nums[i], nums[j], nums[left], nums[right]]);
                    left++;
                    right--;
                    while (nums[left] === nums[left - 1]) {
                        left++;
                    }
                    while (nums[right] === nums[right + 1]) {
                        right--;
                    }
                }
            }
        }
    }

    return res;
};
