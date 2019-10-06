/**
 * @param {number} n
 * @return {number}
 */
var countVowelPermutation = function(n) {
    let res = 0;
    let pre = [1, 1, 1, 1, 1];
    let cur = [1, 1, 1, 1, 1];
    const mod = 1000000007;

    for (let i = 1; i < n; i++) {
        pre = cur.slice();
        cur[0] = (pre[1] + pre[2] + pre[4]) % mod;
        cur[1] = (pre[0] + pre[2]) % mod;
        cur[2] = (pre[1] + pre[3]) % mod;
        cur[3] = pre[2] % mod;
        cur[4] = (pre[2] + pre[3]) % mod;
    }
    for (let item of cur) {
        res += item;
    }

    return res % mod;
};
