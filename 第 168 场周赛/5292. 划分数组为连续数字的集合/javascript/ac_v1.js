/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var isPossibleDivide = function(nums, k) {
    let numsMap = new Map();

    if (nums.length % k) {
        return false;
    }

    nums.sort((val1, val2) => {
        return val1 - val2;
    });

    for (let i = 0; i < nums.length; i++) {
        let num = nums[i];

        if (numsMap.has(num)) {
            numsMap.set(num, numsMap.get(num) + 1);
        } else {
            numsMap.set(num, 1);
        }
    }

    for (let i = 0; i < nums.length; i++) {
        let num = nums[i];

        if (numsMap.get(num) <= 0) {
            continue;
        }
        for (let j = 0; j < k; j++) {
            let next = num + j;

            if (numsMap.has(next) && numsMap.get(next) > 0) {
                numsMap.set(next, numsMap.get(next) - 1);
            } else {
                return false;
            }
        }
    }

    return true;
};
