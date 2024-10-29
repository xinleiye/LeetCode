/**
 * @param {number[]} rewardValues
 * @return {number}
 */
var maxTotalReward = function(rewardValues) {
    rewardValues.sort((r1, r2) => r1 - r2);

    let mask = 1n;
    for (const n of rewardValues) {
        mask = mask | ((mask & ((1n << BigInt(n)) - 1n)) << BigInt(n));
    }

    return mask.toString(2).length - 1;
};
