/**
 * @param {number[]} colors
 * @param {number} k
 * @return {number}
 */
var numberOfAlternatingGroups = function(colors, k) {
    const total = colors.length;
    let res = 0;
    let count = 1;

    for (let i = 2 - k; i < total; i++) {
        if (colors[(i + total) % total] !== colors[(i - 1 + total) % total]) {
            count++;
        } else {
            count = 1;
        }
        if (count >= k) {
            res++;
        }
    }

    return res;
};
