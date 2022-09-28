/**
 * @param {number[][]} intervals
 * @return {number}
 */
var minGroups = function(intervals) {
    let maxNum = 0;
    for (const [s, e] of intervals) {
        maxNum = Math.max(maxNum, s, e);
    }

    const cache = new Array(maxNum + 2).fill(0);
    for (const [s, e] of intervals) {
        cache[s]++;
        cache[e + 1]--;
    }

    for (let i = 1; i < maxNum; i++) {
        cache[i] += cache[i - 1];
    }

    let res = 0;
    for (const c of cache) {
        res = Math.max(res, c);
    }

    return res;
};
