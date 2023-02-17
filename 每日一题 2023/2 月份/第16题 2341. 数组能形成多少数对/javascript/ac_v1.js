/**
 * @param {number[]} nums
 * @return {number[]}
 */
var numberOfPairs = function(nums) {
    let pairs = 0;
    const MAX = 100;
    const countArr = new Array(MAX + 1).fill(0);

    for (const n of nums) {
        countArr[n]++;
    }
    for (const n of countArr) {
        pairs += Math.floor(n / 2);
    }

    return [pairs, nums.length - pairs * 2];
};
