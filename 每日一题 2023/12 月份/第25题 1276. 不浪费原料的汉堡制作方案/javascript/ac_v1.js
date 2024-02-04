/**
 * @param {number} tomatoSlices
 * @param {number} cheeseSlices
 * @return {number[]}
 */
var numOfBurgers = function(tomatoSlices, cheeseSlices) {
    if (tomatoSlices % 2 || tomatoSlices < (cheeseSlices * 2) || cheeseSlices * 4 < tomatoSlices) {
        return [];
    }

    return [(tomatoSlices  - cheeseSlices * 2) / 2, cheeseSlices * 2 - tomatoSlices / 2];
};
