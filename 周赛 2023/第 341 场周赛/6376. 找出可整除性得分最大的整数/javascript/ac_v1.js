/**
 * @param {number[]} nums
 * @param {number[]} divisors
 * @return {number}
 */
var maxDivScore = function(nums, divisors) {
    let res = 1e9;
    let max = 0;

    for (const d of divisors) {
        let divScore = 0;

        for (const n of nums) {
            if (n % d === 0) {
                divScore++;
            }
        }
        if (divScore > max) {
            res = d;
            max = divScore;
        } else if (divScore === max) {
            res = Math.min(res, d);
        }
    }

    return res;
};
