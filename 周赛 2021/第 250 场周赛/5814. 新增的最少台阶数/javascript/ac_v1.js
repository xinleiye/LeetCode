/**
 * @param {number[]} rungs
 * @param {number} dist
 * @return {number}
 */
var addRungs = function(rungs, dist) {
    let res = 0;
    let pre = 0;

    rungs.forEach(rung => {
        res += Math.floor((rung - 1 - pre) / dist);
        pre = rung;
    });

    return res;
};
