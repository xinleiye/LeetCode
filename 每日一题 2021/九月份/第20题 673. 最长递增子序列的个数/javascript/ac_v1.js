/**
 * @param {number[]} nums
 * @return {number}
 */
var findNumberOfLIS = function(nums) {
    let res = 0;
    let maxLen = 0;
    const length = nums.length;
    const lenBuff = new Array(length);
    const countBuff = new Array(length);

    for (let i = 0; i < length; i++) {
        lenBuff[i] = 1;
        countBuff[i] = 1;
        for (let j = 0; j < i; j++) {
            if (nums[i] > nums[j]) {
                const newLen = lenBuff[j] + 1;

                if (lenBuff[i] < newLen) {
                    lenBuff[i] = newLen;
                    countBuff[i] = countBuff[j];
                } else if (lenBuff[i] === newLen) {
                    countBuff[i] += countBuff[j];
                }
            }
        }

        if (lenBuff[i] > maxLen) {
            maxLen = lenBuff[i];
            res = countBuff[i];
        } else if (lenBuff[i] === maxLen) {
            res += countBuff[i];
        }
    }

    return res;
};
