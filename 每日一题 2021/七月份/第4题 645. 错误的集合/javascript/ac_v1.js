/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findErrorNums = function(nums) {
    let res = [0, 0];
    const length = nums.length;
    const numArr = new Array(nums.length + 1).fill(0);

    nums.forEach(val => {
        numArr[val]++;
    });

    for (let i = 1; i <= length; i++) {
        if (numArr[i] === 2) {
            res[0] = i;
        }
        if (numArr[i] === 0) {
            res[1] = i;
        }
    }

    return res;
};
