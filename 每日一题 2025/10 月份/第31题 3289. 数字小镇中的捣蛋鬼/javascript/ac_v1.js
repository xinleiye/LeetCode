/**
 * @param {number[]} nums
 * @return {number[]}
 */
var getSneakyNumbers = function(nums) {
    const numCount = new Array(100).fill(0);
    const res = [];

    for (const n of nums) {
        numCount[n]++;
        if (numCount[n] === 2) {
            res.push(n);
        }
    }

    return res;
};
