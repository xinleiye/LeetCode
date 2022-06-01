/**
 * @param {number[]} matchsticks
 * @return {boolean}
 */
var makesquare = function(matchsticks) {
    let sum = 0;
    for (const match of matchsticks) {
        sum += match;
    }
    if (sum % 4) {
        return false;
    }

    const target = sum / 4;
    const total = matchsticks.length;
    const bits = 1 << total;
    const cache = new Array(bits).fill(-1);
    cache[0] = 0;
    for (let i = 1; i < bits; i++) {
        for (let j = 0; j < total; j++) {
            if ((i & (1 << j)) === 0) {
                continue;
            }
            const index = i & ~(1 << j);
            if (cache[index] >= 0 && (cache[index] + matchsticks[j]) <= target) {
                cache[i] = (cache[index] + matchsticks[j]) % target;
                break;
            }
        }
    }

    return cache[bits - 1] === 0;
};
