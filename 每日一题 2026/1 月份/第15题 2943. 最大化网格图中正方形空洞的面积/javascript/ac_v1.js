/**
 * @param {number} n
 * @param {number} m
 * @param {number[]} hBars
 * @param {number[]} vBars
 * @return {number}
 */
var maximizeSquareHoleArea = function(n, m, hBars, vBars) {
    return Math.pow(Math.min(getMaxLength(hBars), getMaxLength(vBars)) + 1, 2);
};

function getMaxLength(nums) {
    let maxLen = 1;
    let len = 1;
    const total = nums.length;

    nums.sort((n1, n2) => n1 - n2);
    for (let i = 1; i < total; i++) {
        if (nums[i] - nums[i - 1] === 1) {
            len++;
        } else {
            maxLen = Math.max(maxLen, len);
            len = 1;
        }
    }
    maxLen = Math.max(maxLen, len);

    return maxLen;
}
