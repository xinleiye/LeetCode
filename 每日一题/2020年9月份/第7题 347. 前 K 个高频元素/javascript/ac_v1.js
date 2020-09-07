/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    let numMap = new Map();
    let numArr = [];

    nums.forEach(val => {
        if (numMap.has(val)) {
            numMap.set(val, numMap.get(val) + 1);
        } else {
            numMap.set(val, 1);
        }
    });

    numMap.forEach((val, key) => {
        numArr.push(key);
    });

    numArr.sort((val1, val2) => {
        return numMap.get(val2) - numMap.get(val1);
    });

    return numArr.splice(0, k);
};
