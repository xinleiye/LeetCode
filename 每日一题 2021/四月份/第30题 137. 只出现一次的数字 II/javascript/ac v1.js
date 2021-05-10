/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    let res = 0;
    let numMap = new Map();

    nums.forEach(num => {
        if (numMap.has(num)) {
            numMap.set(num, numMap.get(num) + 1);
        } else {
            numMap.set(num, 1);
        }
    });

    numMap.forEach((val, key) => {
        if (val === 1) {
            res = key;
        }
    });

    return res;
};
