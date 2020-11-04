/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function(intervals, newInterval) {
    let res = [];
    let index = 0;
    let mergedInterval = [newInterval[0], newInterval[1]];

    while (index < intervals.length && intervals[index][1] < newInterval[0]) {
        res.push([intervals[index][0], intervals[index][1]]);
        index++;
    }

    if (index < intervals.length) {
        mergedInterval[0] = Math.min(intervals[index][0], newInterval[0]);
    }
    while (index < intervals.length && intervals[index][0] <= newInterval[1]) {
        mergedInterval[1] = Math.max(intervals[index][1], newInterval[1]);
        index++;
    }
    res.push(mergedInterval);

    while (index < intervals.length) {
        res.push([intervals[index][0], intervals[index][1]]);
        index++;
    }

    return res;
};
