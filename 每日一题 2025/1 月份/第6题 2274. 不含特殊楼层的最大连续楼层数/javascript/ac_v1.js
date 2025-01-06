/**
 * @param {number} bottom
 * @param {number} top
 * @param {number[]} special
 * @return {number}
 */
var maxConsecutive = function(bottom, top, special) {
    special.sort((s1, s2) => s1 - s2);

    let res = 0;
    const specialCount = special.length;
    for (let i = 1; i < specialCount; i++) {
        res = Math.max(res, special[i] - special[i - 1] - 1);
    }
    res = Math.max(res, special[0] - bottom);
    res = Math.max(res, top - special[specialCount - 1]);

    return res;
};
