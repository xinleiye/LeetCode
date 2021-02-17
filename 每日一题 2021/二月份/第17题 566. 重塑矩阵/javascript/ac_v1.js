/**
 * @param {number[][]} nums
 * @param {number} r
 * @param {number} c
 * @return {number[][]}
 */
var matrixReshape = function(nums, r, c) {
    let res;
    const maxRow = nums.length;
    const maxCol = nums[0].length;
    let index = 0;

    if (maxRow * maxCol !== r * c) {
        return nums;
    }
    res = new Array(r);
    for (let i = 0; i < r; i++) {
        const row = new Array(c);

        for (let j = 0; j < c; j++) {
            const index = i * c + j;

            row[j] = nums[Math.floor(index / maxCol)][index % maxCol];
        }
        res[i] = row;
    }

    return res;
};
