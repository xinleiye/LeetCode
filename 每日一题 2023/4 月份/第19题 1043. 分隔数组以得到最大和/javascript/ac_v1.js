/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
var maxSumAfterPartitioning = function(arr, k) {
    const total = arr.length;
    const memo = new Array(total).fill(-1);
    const dfsSearch = (arr, right, maxLen, cache) => {
        if (right < 0) {
            return 0;
        }
        if (cache[right] !== -1) {
            return cache[right];
        }

        let sum = 0;
        let max = 0;
        const low = Math.max(0, right - maxLen + 1);
        for (let left = right; left >= low; left--) {
            max = Math.max(max, arr[left]);
            sum = Math.max(sum, dfsSearch(arr, left - 1, maxLen, cache) + (right - left + 1) * max);
        }
        cache[right] = sum;

        return sum;
    };

    return dfsSearch(arr, total - 1, k, memo);
};
