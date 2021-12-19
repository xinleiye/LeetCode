/**
 * @param {number[]} nums
 * @return {number}
 */
var subArrayRanges = function(nums) {
    let res = 0;
    const total = nums.length;
    const minMaxArr = new Array(nums.length);

    for (let i = 0; i < total; i++) {
        minMaxArr[i] = new Array(2);
        minMaxArr[i][0] = nums[i];
        minMaxArr[i][1] = nums[i];
    }
    for (let i = 2; i <= total; i++) {
        for (let j = i - 1; j < total; j++) {
            const cur = nums[j];
            const curMinMax = minMaxArr[j - i + 1];

            if (cur < curMinMax[0]) {
                curMinMax[0] = cur;
            } else if (cur > curMinMax[1]) {
                curMinMax[1] = cur;
            }
            res += curMinMax[1] - curMinMax[0];
        }
    }

    return res;
};
