/**
 * @param {number} tomatoSlices
 * @param {number} cheeseSlices
 * @return {number[]}
 */
var numOfBurgers = function(tomatoSlices, cheeseSlices) {
    let res = [];
    let big;
    let small;

    if (tomatoSlices % 2) {
        return res;
    }
    big = tomatoSlices / 2 - cheeseSlices;
    small = cheeseSlices * 2 - tomatoSlices / 2;
    if (big < 0 || small < 0) {
        return res;
    } else {
        return [big, small];
    }
};
