/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    intervals.sort((i1, i2) => {
        if (i1[0] !== i2[0]) {
            return i1[0] - i2[0];
        } else {
            i1[1] - i2[1];
        }
    });

    const total = intervals.length;
    const res = [];
    let index = 0;
    while (index < total) {
        const start = intervals[index][0];
        let end = intervals[index][1];

        while (index < total && end >= intervals[index][0]) {
            end = Math.max(end, intervals[index][1]);
            index++;
        }
        res.push([start, end]);
    }

    return res;
};
