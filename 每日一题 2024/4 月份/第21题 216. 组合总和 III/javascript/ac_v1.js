/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
var combinationSum3 = function(k, n) {
    const res = [];
    const stack = [];
    const dfsSearch = (cur, tar, maxLen, buffs, buff) => {
        if (tar < 0 || buff.length > maxLen || buff.length + 9 - cur + 1 < maxLen) {
            return;
        }
        if (buff.length === maxLen && tar === 0) {
            buffs.push(buff.slice());
            return;
        }
        for (let i = cur; i <= 9; i++) {
            buff.push(i);
            dfsSearch(i + 1, tar - i, maxLen, buffs, buff);
            buff.pop();
        }
    };

    dfsSearch(1, n, k, res, stack);

    return res;
};
