/**
 * @param {number[]} nums
 * @return {number}
 */
var reductionOperations = function(nums) {
    let res = 0;
    const numMap = new Map();
    const numArr = [];

    nums.sort((val1, val2) => {
        return val1 - val2;
    });

    nums.forEach(val => {
        if (numMap.has(val)) {
            numMap.set(val, numMap.get(val) + 1);
        } else {
            numMap.set(val, 1);
            numArr.push(val);
        }
    });

    for (let i = numArr.length - 1; i > 0; i--) {
        res += numMap.get(numArr[i]) * i;
    }

    return res;
};
