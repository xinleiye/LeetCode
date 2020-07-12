/**
 * @param {number[]} nums
 * @param {number} n
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
var rangeSum = function(nums, n, left, right) {
    let res = 0;
    let sum = new Array(n + 1);
    let index = 0;
    let newNums = new Array(n * (n + 1) / 2);
    
    sum[0] = 0;
    nums.forEach((val, index) => {
        sum[index + 1] = val + sum[index];
    });

    for (let i = 0; i < sum.length; i++) {
        let base = sum[i];
        
        for (let j = i + 1; j < sum.length; j++) {
            newNums[index++] = sum[j] - base;
        }
    }
    newNums.sort((val1, val2) => {
        return val1 - val2;
    });

    for (let i = left - 1; i < right; i++) {
        res += newNums[i];
    }

    return res;
};
