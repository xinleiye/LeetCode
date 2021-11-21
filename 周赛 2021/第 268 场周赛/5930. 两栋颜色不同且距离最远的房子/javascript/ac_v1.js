/**
 * @param {number[]} colors
 * @return {number}
 */
var maxDistance = function(colors) {
    let res = 0;
    const length = colors.length;

    for (let i = 0; i < length; i++) {
        const tar = colors[i];

        for (let j = i + 1; j < length; j++) {
            if (colors[j] !== tar) {
                res = Math.max(res, j - i);
            }
        }
    }

    return res;
};
