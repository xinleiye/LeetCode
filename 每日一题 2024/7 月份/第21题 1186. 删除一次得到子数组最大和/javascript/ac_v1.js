/**
 * @param {number[]} arr
 * @return {number}
 */
var maximumSum = function(arr) {
    const total = arr.length;
    let res = arr[0];
    let maxSum1 = arr[0];
    let maxSum2 = 0;

    for (let i = 1; i < total; i++) {
        maxSum2 = Math.max(maxSum2 + arr[i], maxSum1);
        maxSum1 = Math.max(maxSum1, 0) + arr[i];
        res = Math.max(res, maxSum1, maxSum2);
    }

    return res;
};
