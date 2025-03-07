/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var beautifulSubsets = function(nums, k) {
    let res = -1;
    const memo = new Array(_.max(nums) + k * 2 + 1).fill(0);
    const dfsSearch = (arr, len, diff, cache) => {
        if (len === arr.length) {
            res++;
            return;
        }
        dfsSearch(arr, len + 1, diff, cache);

        const base = arr[len] + diff;
        if (cache[base - diff] === 0 && cache[base + diff] === 0) {
            cache[base]++;
            dfsSearch(arr, len + 1, diff, cache);
            cache[base]--;
        }
    };

    dfsSearch(nums, 0, k, memo);

    return res;
};
