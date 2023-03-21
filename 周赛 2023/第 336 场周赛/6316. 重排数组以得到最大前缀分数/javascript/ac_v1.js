/**
 * @param {number[]} nums
 * @return {number}
 */
var maxScore = function(nums) {
    let res = 0;
    let sum = 0;

    nums.sort((n1, n2) => n2 - n1);
    for (const n of nums) {
        sum += n;
        if (sum > 0) {
            res++;
        } else {
            break;
        }
    }

    return res;
};
