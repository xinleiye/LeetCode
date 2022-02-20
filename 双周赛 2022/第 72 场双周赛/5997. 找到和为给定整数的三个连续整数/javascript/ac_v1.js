/**
 * @param {number} num
 * @return {number[]}
 */
var sumOfThree = function(num) {
    if (num % 3) {
        return [];
    } else {
        const div3 = num / 3;
        return [div3 - 1, div3, div3 + 1];
    }
};
