/**
 * @param {number[]} arr
 * @return {boolean}
 */
var threeConsecutiveOdds = function(arr) {
    const total = arr.length;

    for (let i = 2; i < total; i++) {
        if ((arr[i] % 2 === 1) && (arr[i - 1] % 2 === 1) && (arr[i - 2] % 2 === 1)) {
            return true;
        }
    }

    return false;
};
