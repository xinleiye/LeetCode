/**
 * @param {number[][]} intervals
 * @return {number}
 */
var removeCoveredIntervals = function(intervals) {
    let intervalsSet = new Set();

    for (let i = 0; i < intervals.length; i++) {
        intervalsSet.add(i);
    }

    for (let i = 0; i < intervals.length; i++) {
        let interval1 = intervals[i];

        if (!intervalsSet.has(i)) {
            continue;
        }
        for (let j = 0; j < intervals.length; j++) {
            if (i === j) {
                continue;
            }
            // 区间 i 被 区间 j 覆盖
            if (intervals[j][0] <= interval1[0] && intervals[j][1] >= interval1[1]) {
                intervalsSet.delete(i);
                continue;
            }
            // 区间 j 被 区间 i 覆盖
            if (interval1[0] <= intervals[j][0] && interval1[1] >= intervals[j][1]) {
                intervalsSet.delete(j);
            }
        }
    }

    return intervalsSet.size;
};
