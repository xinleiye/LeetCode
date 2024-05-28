/**
 * @param {number[]} mountain
 * @return {number[]}
 */
var findPeaks = function(mountain) {
    const res = [];
    const total = mountain.length;

    for (let i = 1; i < total - 1; i++) {
        if (mountain[i - 1] < mountain[i] && mountain[i] > mountain[i + 1]) {
            res.push(i);
        }
    }

    return res;
};
