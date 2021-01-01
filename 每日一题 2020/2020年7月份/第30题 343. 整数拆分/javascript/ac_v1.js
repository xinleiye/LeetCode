/**
 * @param {number} n
 * @return {number}
 */
var integerBreak = function(n) {
    let maxSum = new Array(n + 1);

    maxSum[0] = 0;
    maxSum[1] = 1;

    for (let i = 2; i <= n; i++) {
        let curMaxSum = 0;

        for(let j = 1; j < i; j++) {
            curMaxSum = Math.max(curMaxSum, Math.max(j * (i - j), j * maxSum[i - j]));
        }

        maxSum[i] = curMaxSum;
    }

    return maxSum[n];
};
