/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var countKDifference = function(nums, k) {
    let res = 0;

    nums.forEach((val1, index1) => {
        nums.forEach((val2, index2) => {
            if (index1 !== index2) {
                if (Math.abs(val1 - val2) === k) {
                    res++;
                }
            }
        });
    });

    return res / 2;
};
