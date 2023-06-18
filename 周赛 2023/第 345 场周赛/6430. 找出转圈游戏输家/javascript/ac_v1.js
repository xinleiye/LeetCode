/**
 * @param {number} n
 * @param {number} k
 * @return {number[]}
 */
var circularGameLosers = function(n, k) {
    let ballSet = new Set();
    let cur = 1;
    let times = 1;
    const res = [];

    while(!ballSet.has(cur)) {
        ballSet.add(cur);
        cur = (cur + times * k) % n;
        if (cur === 0) {
            cur = n;
        }
        times++;
    }
    for (let i = 1; i <= n; i++) {
        if (!ballSet.has(i)) {
            res.push(i);
        }
    }

    return res;
};
