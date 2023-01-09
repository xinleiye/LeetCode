/**
 * @param {number} n
 * @return {number}
 */
var reinitializePermutation = function(n) {
    let src = new Array(n).fill(0).map((_, index) => index);

    for (let i = 1; i <= n; i++) {
        const cur = new Array(n);
        for (let j = 0; j < n; j++) {
            if (j % 2 === 0) {
                cur[j] = src[j / 2];
            } else {
                cur[j] = src[n / 2 + (j - 1) / 2];
            }
        }

        let got = true;
        for (let j = 0; j < n; j++) {
            if (cur[j] !== j) {
                got = false;
                break;
            }
        }
        if (got) {
            return i;
        }

        src = cur;
    }
};
