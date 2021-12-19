/**
 * @param {string} rings
 * @return {number}
 */
var countPoints = function(rings) {
    let res = 0;
    const total = rings.length;
    const ringInfo = new Array(10);

    for (let i = 0; i < 10; i++) {
        ringInfo[i] = new Set();
    }
    for (let i = 0; i < total; i += 2) {
        ringInfo[rings[i + 1]].add(rings[i]);
    }
    for (let i = 0; i < 10; i++) {
        if (ringInfo[i].size === 3) {
            res++;
        }
    }

    return res;
};
