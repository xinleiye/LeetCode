/**
 * @param {number} n
 * @return {number}
 */
var checkRecord = function(n) {
    const memo = new Array(n + 1).fill(0).map(_ => {
        return new Array(2).fill(0).map(_ => new Array(3).fill(0));
    });

    return dfsSearch(n, 0, 0, memo);
};

function dfsSearch(needed, absent, late, memo) {
    if (needed === 0) {
        return 1;
    }
    if (memo[needed][absent][late] > 0) {
        return memo[needed][absent][late];
    }

    // P
    let res = dfsSearch(needed - 1, absent, 0, memo);
    // A
    if (absent === 0) {
        res += dfsSearch(needed - 1, 1, 0, memo);
    }
    // L
    if (late < 2) {
        res += dfsSearch(needed - 1, absent, late + 1, memo);
    }

    memo[needed][absent][late] = res % (1e9 + 7);

    return memo[needed][absent][late];
}
