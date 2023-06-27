/**
 * @param {number[]} arr
 * @return {number}
 */
var maximumSum = function(arr) {
    let dp0 = arr[0];
    let dp1 = 0;
    let res = arr[0];
    const total = arr.length;

    for (let i = 1; i < total; i++) {
        dp1 = Math.max(dp0, dp1 + arr[i]);
        dp0 = Math.max(dp0, 0) + arr[i];
        res = Math.max(res, dp1, dp0);
    }

    return res;
};
