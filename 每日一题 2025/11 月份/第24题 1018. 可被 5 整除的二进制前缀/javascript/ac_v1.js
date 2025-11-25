/**
 * @param {number[]} nums
 * @return {boolean[]}
 */
var prefixesDivBy5 = function(nums) {
    const res = new Array(nums.length);
    let num = 0;

    nums.forEach((bit, index) => {
        num = ((num << 1) + bit) % 5;
        res[index] = num % 5 === 0;
    });

    return res;
};
