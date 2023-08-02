/**
 * @param {number[]} fronts
 * @param {number[]} backs
 * @return {number}
 */
var flipgame = function(fronts, backs) {
    const valSet = new Set();
    const total = fronts.length;
    let res = Number.MAX_SAFE_INTEGER;

    for (let i = 0; i < total; i++) {
        if (fronts[i] === backs[i]) {
            valSet.add(fronts[i]);
        }
    }
    for (let i = 0; i < total; i++) {
        if (fronts[i] < res && !valSet.has(fronts[i])) {
            res = Math.min(fronts[i], res);
        }
        if (backs[i] < res && !valSet.has(backs[i])) {
            res = Math.min(backs[i], res);
        }
    }

    return res === Number.MAX_SAFE_INTEGER ? 0 : res;
};
