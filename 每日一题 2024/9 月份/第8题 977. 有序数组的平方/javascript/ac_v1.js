/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
    const total = nums.length;
    const res = new Array(total);
    let pos = 0;
    let left = 0;
    let right = 0;

    while (nums[right] < 0) {
        right++;
    }
    left = right - 1;
    while (pos < total) {
        if (left >= 0 && right < total) {
            const vall = Math.pow(nums[left], 2);
            const valr = Math.pow(nums[right], 2);

            if (vall < valr) {
                res[pos] = vall;
                left--;
            } else {
                res[pos] = valr;
                right++;
            }
        } else if (right < total) {
            res[pos] = Math.pow(nums[right], 2);
            right++;
        } else {
            res[pos] = Math.pow(nums[left], 2);
            left--;
        }
        pos++;
    }

    return res;
};
