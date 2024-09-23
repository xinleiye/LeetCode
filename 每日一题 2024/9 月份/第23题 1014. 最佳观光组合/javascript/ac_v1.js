/**
 * @param {number[]} values
 * @return {number}
 */
var maxScoreSightseeingPair = function(values) {
    let res = 0;
    let max = values[0];
    const total = values.length;

    for (let i = 1; i < total; i++) {
        res = Math.max(res, max + values[i] - i);
        max = Math.max(max, values[i] + i);
    }

    return res;
};
