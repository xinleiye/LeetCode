/**
 * @param {number[]} rewardValues
 * @return {number}
 */
var maxTotalReward = function(rewardValues) {
    rewardValues.sort((r1, r2) => r1 - r2);

    const max = rewardValues[rewardValues.length - 1];
    const memo = new Array(max * 2).fill(0);
    memo[0] = 1;
    for (const r of rewardValues) {
        for (let i = 2 * r - 1; i >= r; i--) {
            if (memo[i - r] === 1) {
                memo[i] = 1;
            }
        }
    }

    let res = 0;
    for (let i = memo.length - 1; i > 0 ; i--) {
        if (memo[i] === 1) {
            res = i;
            break;
        }
    }

    return res;
};
