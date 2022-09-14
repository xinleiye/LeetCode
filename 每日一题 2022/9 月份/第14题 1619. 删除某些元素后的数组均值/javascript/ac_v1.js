/**
 * @param {number[]} arr
 * @return {number}
 */
var trimMean = function(arr) {
    const total = arr.length;
    let sum = 0;

    arr.sort((n1, n2) => n1 - n2);
    for (let i = total * 0.05; i < total * 0.95; i++) {
        sum += arr[i];
    }

    return sum / (total * 0.9);
};
