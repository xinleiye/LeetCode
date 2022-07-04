/**
 * @param {number[]} arr
 * @return {number[][]}
 */
var minimumAbsDifference = function(arr) {
    arr.sort((n1, n2) => n1 - n2);

    const res = [];
    const length = arr.length;
    let minDiff = arr[length - 1] - arr[0];
    for (let i = 1; i < length; i++) {
        const diff = arr[i] - arr[i - 1];
        if (diff < minDiff) {
            res.length = 0;
            res.push([arr[i - 1], arr[i]]);
            minDiff = diff;
        } else if (diff === minDiff) {
            res.push([arr[i - 1], arr[i]]);
        }
    }

    return res;
};
