/**
 * @param {number[]} nums
 * @return {number[]}
 */
var largestDivisibleSubset = function(nums) {
    let maxIndex = 0;
    const total = nums.length;
    const group = new Array(total).fill(0);
    const from = new Array(total).fill(-1);
    const res = [];

    nums.sort((n1, n2) => n1 - n2);
    for (let i = 0; i < total; i++) {
        for (let j = 0; j < i; j++) {
            if (nums[i] % nums[j] === 0 && group[j] > group[i]) {
                group[i] = group[j];
                from[i] = j;
            }
        }
        group[i]++;
        if (group[i] > group[maxIndex]) {
            maxIndex = i;
        }
    }
    for (let i = maxIndex; i >= 0; i = from[i]) {
        res.push(nums[i]);
    }

    return res;
};
