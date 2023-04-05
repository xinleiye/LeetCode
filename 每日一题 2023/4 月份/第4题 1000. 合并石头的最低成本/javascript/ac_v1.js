/**
 * @param {number[]} stones
 * @param {number} k
 * @return {number}
 */
var mergeStones = function(stones, k) {
    const total = stones.length;
    if ((total - 1) % (k - 1) !== 0) {
        return -1;
    }

    const preSum = new Array(total);
    const memo = new Array(total).fill(0).map(() => new Array(total).fill(0).map(() => new Array(k + 1).fill(-1)));
    memo[0][0][1] = 0;
    preSum[0] = stones[0];
    for (let i = 1; i < total; i++) {
        memo[i][i][1] = 0;
        preSum[i] = preSum[i - 1] + stones[i];
    }

    const MAX = 1e9 + 7;
    const dpSearch = (left, right, tar) => {
        if (memo[left][right][tar] !== -1) {
            return memo[left][right][tar];
        }
        if (right - left + 1 < tar) {
            return MAX;
        }
        if (tar === 1) {
            const cost = dpSearch(left, right, k);

            if (cost === MAX) {
                memo[left][right][tar] = cost;

                return cost;
            }
            memo[left][right][tar] = cost + preSum[right] - (left > 0 ? preSum[left - 1] : 0);

            return memo[left][right][tar];
        }

        let cost = MAX;
        for (let i = left; i < right; i += k - 1) {
            cost = Math.min(cost, dpSearch(left, i, 1) + dpSearch(i + 1, right, tar - 1));
        }
        memo[left][right][tar] = cost;

        return memo[left][right][tar];
    };

    return dpSearch(0, total - 1, 1);
};
