/**
 * @param {number[]} stones
 * @return {number[]}
 */
var numMovesStonesII = function(stones) {
    const total = stones.length;

    stones.sort((s1, s2) => s1 - s2);
    if (stones[total - 1] - stones[0] + 1 === total) {
        return [0, 0];
    }

    const max = Math.max(stones[total - 1] - stones[1], stones[total - 2] - stones[0]) + 1 - (total - 1);
    let min = total;
    for (let i = 0, j = 0; i < total && (j + 1 < total); i++) {
        while (j + 1 < total && (stones[j + 1] - stones[i] + 1 <= total)) {
            j++;
        }
        if (j - i + 1 === total - 1 && (stones[j] - stones[i] + 1 === total - 1)) {
            min = Math.min(min, 2);
        } else {
            min = Math.min(min, total - (j - i + 1));
        }
    }

    return [min, max];
};
