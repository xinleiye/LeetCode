/**
 * @param {number[]} nums
 * @param {number[]} divisors
 * @return {number}
 */
var maxDivScore = function(nums, divisors) {
    let res = 1e9;
    let maxScore = 0;

    for (const d of divisors) {
        let score = 0;

        for (const n of nums) {
            if (n % d === 0) {
                score++;
            }
        }
        if (score > maxScore) {
            maxScore = score;
            res = d;
        } else if (score === maxScore) {
            res = Math.min(res, d);
        }
    }

    return res;
};
