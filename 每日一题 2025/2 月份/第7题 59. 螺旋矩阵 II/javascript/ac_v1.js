/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function(n) {
    const res = new Array(n);
    let num = 1;

    for (let i = 0; i < n; i++) {
        res[i] = new Array(n);
    }

    for (let i = 0, len = Math.ceil(n / 2); i < len; i++) {
        /*
        t t t t t
        l t t t r
        l l t r r
        l b b b r
        b b b b b
        */
        for (let j = i; j < n - i; j++) {
            res[i][j] = num;
            num++;
        }
        for (let j = i + 1; j < n - i - 1; j++) {
            res[j][n - i - 1] = num;
            num++;
        }
        if (n - i - 1 !== i) {
            for (let j = n - i - 1; j >= i; j--) {
                res[n - i - 1][j] = num;
                num++;
            }
        }
        for (let j = n - i - 2; j > i; j--) {
            res[j][i] = num;
            num++;
        }
    }

    return res;
};
