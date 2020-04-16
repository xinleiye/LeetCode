/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    let res = [];
    let start = Infinity;
    let end = Infinity;

    if (intervals.length === 0) {
        return res;
    }

    intervals.sort((val1, val2) => {
        return val1[0] - val2[0];
    });

    start = intervals[0][0];
    end = intervals[0][1];
    for (let i = 1, len = intervals.length; i < len; i++) {
        if (intervals[i][0] > end) {
            res.push([start, end]);
            start = intervals[i][0];
            end = intervals[i][1];
        } else {
            end = Math.max(end, intervals[i][1]);
        }
    }
    res.push([start, end]);

    return res;
};
