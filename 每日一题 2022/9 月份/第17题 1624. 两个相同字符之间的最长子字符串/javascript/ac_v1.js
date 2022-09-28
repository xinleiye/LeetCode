/**
 * @param {string} s
 * @return {number}
 */
var maxLengthBetweenEqualCharacters = function(s) {
    let res = -1;
    const chIndex = new Array(26).fill(-1);
    const total = s.length;

    for (let i = 0; i < total; i++) {
        const index = s.charCodeAt(i) - 97;

        if (chIndex[index] > -1) {
            res = Math.max(res, i - chIndex[index] - 1);
        } else {
            chIndex[index] = i;
        }
    }

    return res;
};
