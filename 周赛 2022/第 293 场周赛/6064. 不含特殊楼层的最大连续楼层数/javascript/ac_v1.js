/**
 * @param {number} bottom
 * @param {number} top
 * @param {number[]} special
 * @return {number}
 */
var maxConsecutive = function(bottom, top, special) {
    let res = 0;
    let floors = [];

    special.sort((s1, s2) => s1 - s2);
    floors.push([bottom, special[0] - 1]);
    for (let i = 1, len = special.length; i < len; i++) {
        floors.push([special[i - 1] + 1, special[i] - 1]);
    }
    floors.push([special[special.length - 1] + 1, top]);
    for (const [f1, f2] of floors) {
        res = Math.max(res, f2 - f1 + 1);
    }

    return res;
};
