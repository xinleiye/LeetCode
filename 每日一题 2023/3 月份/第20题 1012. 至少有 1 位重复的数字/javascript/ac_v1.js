/**
 * @param {number} n
 * @return {number}
 */
var numDupDigitsAtMostN = function(n) {
    const strN = String(n);
    const memo = new Array(strN.length).fill(0).map(() => new Array(1 << 10).fill(-1));
    const dfsSearch = (mask, len, isSame, str, cache) => {
        if (len === str.length) {
            return 1;
        }
        if (!isSame && cache[len][mask] >= 0) {
            return cache[len][mask];
        }

        let res = 0;
        let max = isSame ? Number(str[len]) : 9;
        for (let i = 0; i <= max; i++) {
            if ((mask & (1 << i)) !== 0) {
                continue;
            }
            res += dfsSearch((mask === 0 && i === 0) ? mask : mask | (1 << i), len + 1, isSame && i === max, str, cache)
        }
        if (!isSame) {
            cache[len][mask] = res;
        }

        return res;
    };

    return n + 1 - dfsSearch(0, 0, true, strN, memo);
};
