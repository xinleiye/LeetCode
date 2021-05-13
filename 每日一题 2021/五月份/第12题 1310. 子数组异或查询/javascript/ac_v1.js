/**
 * @param {number[]} arr
 * @param {number[][]} queries
 * @return {number[]}
 */
var xorQueries = function(arr, queries) {
    let res = new Array(queries.length);
    let xorArr = new Array(arr.length);

    xorArr[0] = arr[0];
    for (let i = 1, len = arr.length; i < len; i++) {
        xorArr[i] = arr[i] ^ xorArr[i - 1];
    }

    for (let i = 0, len = queries.length; i < len; i++) {
        if (queries[i][0] > 0) {
            res[i] = xorArr[queries[i][1]] ^ xorArr[queries[i][0] - 1];
        } else {
            res[i] = xorArr[queries[i][1]];
        }
    }

    return res;
};