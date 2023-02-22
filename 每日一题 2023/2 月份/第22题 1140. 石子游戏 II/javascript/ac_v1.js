/**
 * @param {number[]} piles
 * @return {number}
 */
var stoneGameII = function(piles) {
    const total = piles.length;
    const preSum = new Array(total + 1);
    const memoMap = new Map();
    const dfsSearch = (index, m, arr, total, cache) => {
        if (m * 2 >= total - index) {
            return arr[total] - arr[index];
        }

        const key = index * 1000 + m;
        if (cache.has(key)) {
            return cache.get(key);
        }

        let count = 0;
        for (let i = 1, len = m * 2; i <= len; i++) {
            count = Math.max(count, arr[total] - arr[index] - dfsSearch(index + i, Math.max(i, m), arr, total, cache));
        }
        cache.set(key, count);

        return count;
    };

    preSum[0] = 0;
    for (let i = 0; i < total; i++) {
        preSum[i + 1] = preSum[i] + piles[i];
    }

    return dfsSearch(0, 1, preSum, total, memoMap);
};
