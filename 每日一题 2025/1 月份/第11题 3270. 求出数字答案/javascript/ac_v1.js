/**
 * @param {number} num1
 * @param {number} num2
 * @param {number} num3
 * @return {number}
 */
var generateKey = function(num1, num2, num3) {
    let res = 0;
    const nums = [num1, num2, num3];
    const MAX_POW = 4;

    for (let i = 0; i < MAX_POW; i++) {
        let min = 9;

        for (let j = 0; j < nums.length; j++) {
            min = Math.min(min, nums[j] % 10);
            nums[j] = Math.floor(nums[j] / 10);
        }
        res = min * Math.pow(10, i) + res;
    }

    return res;
};
