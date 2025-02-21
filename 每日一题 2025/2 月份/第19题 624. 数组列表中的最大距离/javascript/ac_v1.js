/**
 * @param {number[][]} arrays
 * @return {number}
 */
var maxDistance = function(arrays) {
    let res = 0;
    const total = arrays.length;
    let min = arrays[0][0];
    let max = arrays[0][arrays[0].length - 1];

    for (let i = 1; i < total; i++) {
        const len = arrays[i].length;

        res = Math.max(res, Math.abs(arrays[i][len - 1] - min), Math.abs(arrays[i][0] - max));
        min = Math.min(min, arrays[i][0]);
        max = Math.max(max, arrays[i][len - 1]);
    }

    return res;
};
