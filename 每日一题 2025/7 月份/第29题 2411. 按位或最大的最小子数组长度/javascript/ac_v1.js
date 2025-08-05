/**
 * @param {number[]} nums
 * @return {number[]}
 */
var smallestSubarrays = function(nums) {
    const res = new Array(nums.length);
    const bitPos = new Array(32).fill(-1);

    for (let i = nums.length - 1; i >= 0; i--) {
        let right = i;

        for (let j = 0; j < 31; j++) {
            if (nums[i] & (1 << j)) {
                bitPos[j] = i;
            } else {
                if (bitPos[j] !== -1) {
                    right = Math.max(right, bitPos[j]);
                }
            }
        }
        res[i] = right - i + 1;
    }

    return res;
};
