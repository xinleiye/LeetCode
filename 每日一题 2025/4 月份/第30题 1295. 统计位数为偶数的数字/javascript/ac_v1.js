/**
 * @param {number[]} nums
 * @return {number}
 */
var findNumbers = function(nums) {
    let res = 0;

    for (const n of nums) {
        if (n.toString().length % 2 === 0) {
            res++;
        }
    }

    return res;
};
