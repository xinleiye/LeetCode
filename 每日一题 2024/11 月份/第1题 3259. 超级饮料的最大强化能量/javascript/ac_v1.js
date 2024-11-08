/**
 * @param {number[]} energyDrinkA
 * @param {number[]} energyDrinkB
 * @return {number}
 */
var maxEnergyBoost = function(energyDrinkA, energyDrinkB) {
    const total = energyDrinkA.length;
    const memo = new Array(total + 1).fill(0).map(_ => new Array(2).fill(0));

    memo[1][0] = energyDrinkA[0];
    memo[1][1] = energyDrinkB[0];
    for (let i = 1; i < total; i++) {
        memo[i + 1][0] = energyDrinkA[i] + Math.max(memo[i][0], memo[i - 1][1]);
        memo[i + 1][1] = energyDrinkB[i] + Math.max(memo[i][1], memo[i - 1][0]);
    }

    return Math.max(memo[total][0], memo[total][1]);
};
