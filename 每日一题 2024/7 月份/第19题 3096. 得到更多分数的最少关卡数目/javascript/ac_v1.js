/**
 * @param {number[]} possible
 * @return {number}
 */
var minimumLevels = function(possible) {
    let a = 0;
    let b = 0;
    const total = possible.length;

    for (let i = 0; i < total; i++) {
        b += possible[i] === 1 ? 1 : -1;
    }
    for (let i = 0; i < total - 1; i++) {
        if (possible[i] === 1) {
            a += 1;
            b -= 1;
        } else {
            a -= 1;
            b += 1;
        }
        if (a > b) {
            return i + 1;
        }
    }

    return -1;
};
