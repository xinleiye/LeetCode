/**
 * @param {number[]} maxHeights
 * @return {number}
 */
var maximumSumOfHeights = function(maxHeights) {
    let res = 0;
    const total = maxHeights.length;

    for (let i = 0; i < total; i++) {
        res = Math.max(res, create(maxHeights, i));
    }

    return res;
};

function create(heights, maxIndex) {
    const total = heights.length;
    let index = maxIndex;
    let totalHeight = 0;
    let preHeight = heights[maxIndex];
    let curHeight = 0;

    while (index >= 0) {
        curHeight = heights[index] >= preHeight ? preHeight : heights[index];
        totalHeight += curHeight;
        preHeight = curHeight;
        index--;
    }
    index = maxIndex;
    preHeight = heights[maxIndex];
    curHeight = 0;
    while (index < total) {
        curHeight = heights[index] >= preHeight ? preHeight : heights[index];
        totalHeight += curHeight;
        preHeight = curHeight;
        index++;
    }

    return totalHeight - heights[maxIndex];
}
