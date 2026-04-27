/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumDistance = function(nums) {
    const total = nums.length;
    let res = Infinity;

    for (let i = 0; i < total; i++) {
        for (let j = i + 1; j < total; j++) {
            if (nums[i] !== nums[j]) {
                continue;
            }
            for (let k = j + 1; k < total; k++) {
                if (nums[j] === nums[k]) {
                    res = Math.min(res, k * 2 - i * 2);
                }
            }
        }
    }

    return res === Infinity ? -1 : res;
};
