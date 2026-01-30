/**
 * @param {number[]} arr
 * @return {number[][]}
 */
var minimumAbsDifference = function(arr) {
    const res = [];
    let min = Infinity;
    const total = arr.length;

    arr.sort((n1, n2) => n1 - n2);
    for (let i = 1; i < total; i++) {
        const diff = arr[i] - arr[i - 1];

        if (diff < min) {
            res.length = 0;
            res.push([arr[i - 1], arr[i]]);
            min = diff;
        } else if (diff === min) {
            res.push([arr[i - 1], arr[i]]);
        }
    }

    return res;
};
