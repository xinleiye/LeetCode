/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumOperations = function(nums) {
    let res = 0;

    for (const n of nums) {
        if (n % 3) {
            res++;
        }
    }

    return res;
};
