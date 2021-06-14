/**
 * @param {number[][]} ranges
 * @param {number} left
 * @param {number} right
 * @return {boolean}
 */
var isCovered = function(ranges, left, right) {
    const rangeSet = new Set();

    ranges.forEach(item => {
        for (let i = item[0], len = item[1]; i <= len; i++) {
            if (i >= left && i <= right) {
                rangeSet.add(i);
            }
        }
    });

    return rangeSet.size === (right - left + 1);
};
