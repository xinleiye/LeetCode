/**
 * @param {number[]} nums
 * @return {number}
 */
var maxCoins = function(nums) {
    const arr = nums.slice();
    arr.unshift(1);
    arr.push(1);

    const total = arr.length;
    const memo = new Array(total).fill(0).map(_ => new Array(total).fill(-1));

    return dfsSearch(0, total - 1, arr, memo);
};

function dfsSearch(left, right, arr, memo) {
    if (left >= right - 1) {
        return 0;
    }
    if (memo[left][right] !== -1) {
        return memo[left][right];
    }
    for (let i = left + 1; i < right; i++) {
        let count = arr[left] * arr[i] * arr[right];

        count += dfsSearch(left, i, arr, memo) + dfsSearch(i ,right, arr, memo);
        memo[left][right] = Math.max(memo[left][right], count);
    }

    return memo[left][right];
}
