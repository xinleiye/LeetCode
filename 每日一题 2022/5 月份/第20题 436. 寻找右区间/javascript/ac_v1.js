/**
 * @param {number[][]} intervals
 * @return {number[]}
 */
var findRightInterval = function(intervals) {
    const total = intervals.length;
    const startIndex = new Array(total).fill(0).map(() => new Array(2).fill(0));
    for (let i = 0; i < total; i++) {
        startIndex[i][0] = intervals[i][0];
        startIndex[i][1] = i;
    }
    startIndex.sort((s1, s2) => s1[0] - s2[0]);

    const res = new Array(total).fill(0);
    for (let i = 0; i < total; i++) {
        let left = 0;
        let right = total - 1;
        let target = -1;
        while (left <= right) {
            const mid = left + Math.floor((right - left) / 2);
            if (startIndex[mid][0] >= intervals[i][1]) {
                target = startIndex[mid][1];
                right = mid - 1;
            } else {
                left = mid + 1;
            }
        }
        res[i] = target;
    }

    return res;
};
