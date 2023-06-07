/**
 * @param {number[][]} nums
 * @return {number}
 */
var matrixSum = function(nums) {
    let res = 0;
    const maxRow = nums.length;
    const maxCol = nums[0].length;

    for (const row of nums) {
        row.sort((n1, n2) => n2 - n1);
    }
    for (let i = 0; i < maxCol; i++) {
        let max = 0;

        for (let j = 0; j < maxRow; j++) {
            max = Math.max(nums[j][i], max);
        }
        res += max;
    }

    return res;
};
