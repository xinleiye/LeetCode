/**
 * @param {number[][]} intervals
 * @return {number}
 */
var intersectionSizeTwo = function(intervals) {
    const total = intervals.length;
    const buff = new Array(total).fill(0).map(_ => []);
    const COUNT = 2;
    let res = 0;

    intervals.sort(([s1, e1], [s2, e2]) => {
        if (s1 !== s2) {
            return s2 - s1;
        } else {
            return e1 - e2;
        }
    });
    for (let i = 0; i < total; i++) {
        for (let j = intervals[i][0], len = buff[i].length; len < COUNT; j++, len++) {
            res++;
            for (let k = i + 1; k < total; k++) {
                if (intervals[k][1] < j) {
                    break;
                }
                buff[k].push(j);
            }
        }
    }

    return res;
};
