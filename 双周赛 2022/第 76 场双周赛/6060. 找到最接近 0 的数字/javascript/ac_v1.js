/**
 * @param {number[]} nums
 * @return {number}
 */
var findClosestNumber = function(nums) {
    let res = 100000;

    nums.sort((n1, n2) => n1 - n2);
    for (const num of nums) {
        if (Math.abs(num) <= Math.abs(res)) {
            res = num;
        }
    }

    return res;
};
