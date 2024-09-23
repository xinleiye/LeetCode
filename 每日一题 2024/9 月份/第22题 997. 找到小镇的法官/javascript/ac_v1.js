/**
 * @param {number} n
 * @param {number[][]} trust
 * @return {number}
 */
var findJudge = function(n, trust) {
    const trustList = new Array(n + 1).fill(0);
    const trustedList = new Array(n + 1).fill(0);
    let res = -1;

    for (const [a, b] of trust) {
        if (b > 0) {
            trustedList[b]++;
            trustList[a]++;
        }
    }
    for (let i = 1; i <= n; i++) {
        if (trustedList[i] === n - 1 && trustList[i] === 0) {
            res = i;
            break;
        }
    }

    return res;
};
