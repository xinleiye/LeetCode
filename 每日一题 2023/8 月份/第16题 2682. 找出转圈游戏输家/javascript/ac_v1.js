/**
 * @param {number} n
 * @param {number} k
 * @return {number[]}
 */
var circularGameLosers = function(n, k) {
    let cur = 0;
    const count = new Array(n).fill(0);
    let step = 1;
    count[0] = 1;
    while (true) {
        cur = (cur + k * step) % n;
        count[cur]++;
        if (count[cur] === 2) {
            break;
        }
        step++;
    }

    const res = [];
    for (let i = 1; i <= n; i++) {
        if (count[i] === 0) {
            res.push(i + 1);
        }
    }

    return res;
};
