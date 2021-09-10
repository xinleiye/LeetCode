/**
 * @param {number[]} chalk
 * @param {number} k
 * @return {number}
 */
var chalkReplacer = function(chalk, k) {
    const preSum = new Array(chalk.length);
    const length = chalk.length;
    let totalRest;
    
    preSum[0] = chalk[0];
    for (let i = 1; i < length; i++) {
        preSum[i] = chalk[i] + preSum[i - 1];
    }

    totalRest = k % preSum[length - 1];
    for (let i = 0; i < length; i++) {
        if (preSum[i] > totalRest) {
            return i;
        }
    }
};
