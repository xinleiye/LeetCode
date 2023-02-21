/**
 * @param {number} n
 * @param {number[]} ranges
 * @return {number}
 */
var minTaps = function(n, ranges) {
    const rightMost = new Array(n + 1).fill(0);
    for (let i = 0; i <= n; i++) {
        const left = Math.max(0, i - ranges[i]);
        const right = Math.min(n, i + ranges[i]);

        rightMost[left] = Math.max(rightMost[left], right);
    }

    let res = 0;
    let preRight = 0;
    let curRight = 0;
    for (let i = 0; i < n; i++) {
        curRight = Math.max(curRight, rightMost[i]);
        if (i === curRight) {
            return -1;
        }
        if (i === preRight) {
            res++;
            preRight = curRight;
        }
    }

    return res;
};
