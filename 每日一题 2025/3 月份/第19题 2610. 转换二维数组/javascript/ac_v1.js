/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var findMatrix = function(nums) {
    let rows = 0;
    const numCount = new Array(nums.length + 1).fill(0);
    for (const n of nums) {
        numCount[n]++;
        rows = Math.max(rows, numCount[n]);
    }

    const res = new Array(rows).fill(0).map(_ => new Array());
    for (let i = 1; i <= nums.length; i++) {
        for (let j = 0; j < numCount[i]; j++) {
            res[j].push(i);
        }
    }

    return res;
};
