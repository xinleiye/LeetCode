/**
 * @param {number[]} arr
 * @return {boolean}
 */
var canMakeArithmeticProgression = function(arr) {
    let sum = 0;
    let start = 1e6;
    let end = -1e6

    arr.forEach(val => {
        sum += val;
        start = Math.min(val, start);
        end = Math.max(val, end);
    });
    
    return sum === (start + end) * arr.length / 2;
};
