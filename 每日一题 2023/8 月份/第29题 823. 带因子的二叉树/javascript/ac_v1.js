/**
 * @param {number[]} arr
 * @return {number}
 */
var numFactoredBinaryTrees = function(arr) {
    const total = arr.length;
    const mod = 1e9 + 7;
    const dp = new Array(total).fill(1);
    let res = 0;

    arr.sort((a1, a2) => a1 - a2);
    for (let i = 0; i < total; i++) {
        let left = 0;
        let right = i - 1;

        while (left <= right) {
            while (left <= right && arr[left] * arr[right] > arr[i]) {
                right--;
            }
            if (left <= right && arr[left] * arr[right] === arr[i]) {
                if (left === right) {
                    dp[i] = (dp[i] + dp[left] * dp[right]) % mod;
                } else {
                    dp[i] = (dp[i] + dp[left] * dp[right] * 2) % mod;
                }
            }
            left++;
        }
        res = (res + dp[i]) % mod;
    }

    return res;
};
