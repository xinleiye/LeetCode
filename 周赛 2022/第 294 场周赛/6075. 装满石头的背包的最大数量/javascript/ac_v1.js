/**
 * @param {number[]} capacity
 * @param {number[]} rocks
 * @param {number} additionalRocks
 * @return {number}
 */
var maximumBags = function(capacity, rocks, additionalRocks) {
    let res = 0;
    const total = capacity.length;
    const restCapacity = new Array(capacity.length);

    for (let i = 0; i < total; i++) {
        restCapacity[i] = capacity[i] - rocks[i];
    }
    restCapacity.sort((r1, r2) => r1 - r2);
    for (const r of restCapacity) {
        if (additionalRocks >= r) {
            res++;
        } else {
            break;
        }
        additionalRocks -= r;
    }
    
    return res;
};
