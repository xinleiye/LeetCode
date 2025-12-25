/**
 * @param {number[]} happiness
 * @param {number} k
 * @return {number}
 */
var maximumHappinessSum = function(happiness, k) {
    let res = 0;

    happiness.sort((h1, h2) => h2 - h1);
    for (let i = 0; i < k; i++) {
        res += Math.max(happiness[i] - i, 0);
    }

    return res;
};
