/**
 * @param {string[]} nums
 * @return {string}
 */
var findDifferentBinaryString = function(nums) {
    let res = "";
    let num = 0;
    let length = nums.length;
    const numsSet = new Set();

    nums.forEach(val => {
        numsSet.add(parseInt(val, 2));
    });
    while (num < Math.pow(2, length) - 1 && numsSet.has(num)) {
        num++;
    }

    for (let i = 0; i < length; i++) {
        res = num % 2 + res;
        num = num >>> 1;
    }

    return res;
};
