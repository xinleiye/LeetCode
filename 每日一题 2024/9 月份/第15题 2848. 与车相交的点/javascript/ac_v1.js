/**
 * @param {number[][]} nums
 * @return {number}
 */
var numberOfPoints = function(nums) {
    const MAX = 102;
    const segArr = new Array(MAX).fill(0);
    let res = 0;

    for (const [s, e] of nums) {
        segArr[s]++;
        segArr[e + 1]--;
    }
    for (let i = 1; i < MAX; i++) {
        segArr[i] += segArr[i - 1];
        if (segArr[i] > 0) {
            res++;
        }
    }

    return res;
};
