/**
 * @param {number[]} arr
 * @return {number}
 */
var trimMean = function(arr) {
    let sum = 0;

    arr.sort((val1, val2) => {
        return val1 - val2;
    });
    for (let i = arr.length * 0.05, len = arr.length * 0.95; i < len; i++) {
        sum += arr[i];
    }
    
    return sum / (arr.length * 0.9);
};
