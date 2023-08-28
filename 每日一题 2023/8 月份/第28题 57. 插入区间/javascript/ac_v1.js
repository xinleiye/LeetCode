/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function(intervals, newInterval) {
    const res = [];
    const total = intervals.length;
    const mergeInterval = [newInterval[0], newInterval[1]];
    let index = 0;

    while (index < total && intervals[index][1] < mergeInterval[0]) {
        res.push([intervals[index][0], intervals[index][1]]);
        index++;
    }
    if (index < total) {
        mergeInterval[0] = Math.min(mergeInterval[0], intervals[index][0]);
    }
    while (index < total && intervals[index][0] <= newInterval[1]) {
        mergeInterval[1] = Math.max(mergeInterval[1], intervals[index][1]);
        index++;
    }
    res.push(mergeInterval);
    while (index < total) {
        res.push([intervals[index][0], intervals[index][1]]);
        index++;
    }

    return res;
};
