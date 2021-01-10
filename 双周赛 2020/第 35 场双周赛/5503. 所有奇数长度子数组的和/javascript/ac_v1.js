/**
 * @param {number[]} arr
 * @return {number}
 */
var sumOddLengthSubarrays = function(arr) {
    let res = 0;
    let sums = new Array(arr.length + 1).fill(0);
    
    for (let i = 0; i < arr.length; i++) {
        sums[i + 1] = arr[i] + sums[i];
    }

    for (let i = 1; i <= arr.length; i += 2) {
        for (let j = i; j <= arr.length; j++) {
            res += sums[j] - sums[j - i];
        }
    }
    
    return res;
};
