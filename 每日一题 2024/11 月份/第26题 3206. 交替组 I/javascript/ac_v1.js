/**
 * @param {number[]} colors
 * @return {number}
 */
var numberOfAlternatingGroups = function(colors) {
    let res = 0;
    const total = colors.length;

    for (let i = 0; i < total; i++) {
        if ((colors[(i - 1 + total) % total] !== colors[i]) && (colors[i] !== colors[(i + 1) % total])) {
            res++;
        }
    }

    return res;
};
