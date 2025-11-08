/**
 * @param {string} colors
 * @param {number[]} neededTime
 * @return {number}
 */
var minCost = function(colors, neededTime) {
    const total = colors.length;
    let pos = 0;
    let res = 0;

    while (pos < total) {
        let max = neededTime[pos];
        let time = neededTime[pos];

        pos++;
        while (pos < total && colors[pos] === colors[pos - 1]) {
            max = Math.max(max, neededTime[pos]);
            time += neededTime[pos];
            pos++;
        }
        res += time - max;
    }

    return res;
};
