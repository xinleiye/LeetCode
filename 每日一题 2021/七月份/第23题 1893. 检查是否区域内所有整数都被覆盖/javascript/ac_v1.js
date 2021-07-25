/**
 * @param {number[][]} ranges
 * @param {number} left
 * @param {number} right
 * @return {boolean}
 */
var isCovered = function(ranges, left, right) {
    const maxRange = 52;
    const range = new Array(maxRange).fill(0);
    let sum = 0;

    ranges.forEach(item => {
        range[item[0]]++;
        range[item[1] + 1]--;
    });
    for (let i = 1; i < maxRange; i++) {
        sum += range[i];
        if (i >= left && i <= right && sum <= 0) {
            return false;
        }
    }

    return true;
};
