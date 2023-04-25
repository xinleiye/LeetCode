/**
 * @param {string[]} names
 * @param {number[]} heights
 * @return {string[]}
 */
var sortPeople = function(names, heights) {
    const total = names.length;
    const res = new Array(total);
    const indexH = Array.from({ length: total }, (_, index) => index).sort((i1, i2) => heights[i2] - heights[i1]);

    for (let i = 0; i < total; i++) {
        res[i] = names[indexH[i]];
    }

    return res;
};
