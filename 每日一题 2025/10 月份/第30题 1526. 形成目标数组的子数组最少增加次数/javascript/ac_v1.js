/**
 * @param {number[]} target
 * @return {number}
 */
var minNumberOperations = function(target) {
    let res = target[0];
    const total = target.length;

    for (let i = 1; i < total; i++) {
        res += Math.max(0, target[i] - target[i - 1]);
    }

    return res;
};
