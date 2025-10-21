/**
 * @param {number[]} energy
 * @param {number} k
 * @return {number}
 */
var maximumEnergy = function(energy, k) {
    let res = -Infinity;
    const total = energy.length;

    for (let i = total - k; i < total; i++) {
        let cur = 0;

        for (let j = i; j >= 0; j -= k) {
            cur += energy[j];
            res = Math.max(res, cur);
        }
    }

    return res;
};
