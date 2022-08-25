/**
 * @param {number[][]} intervals
 * @return {number}
 */
var intersectionSizeTwo = function(intervals) {
    intervals.sort((i1, i2) => i1[0] === i2[0] ? i2[1] - i1[1] : i1[0] - i2[0]);

    const total = intervals.length;
    const buff = [];
    for (let i = 0; i < total; i++) {
        buff[i] = [];
    }

    const help = (intervals, buff, pos, num) => {
        for (let i = pos; i >= 0; i--) {
            if (intervals[i][1] < num) {
                break;
            }
            buff[i].push(num);
        }
    };
    let res = 0;
    const count = 2;

    for (let i = total - 1; i >= 0; i--) {
        for (let j = intervals[i][0], len = buff[i].length; len < count; j++, len++) {
            res++;
            help(intervals, buff, i - 1, j);
        }
    }

    return res;
};
